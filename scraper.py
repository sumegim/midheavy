import json
import re
import requests
from bs4 import BeautifulSoup
import os
import urllib.request
import html
import yaml

# Read URLs from db.txt
with open('C:\\Users\\sumeg\\Documents\\repos\\midheavy\\db.txt', 'r') as f:
    urls = f.read().splitlines()

full_refresh = False
get_images = True

for url in urls:
    id = url.split('/')[-1]
    if not full_refresh and os.path.exists(id):
        continue
    print("Loading: " + url)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    script_tag = soup.find('script', text=re.compile('GEEK.geekitemPreload = '))

    # Extract the JSON object
    json_text = re.search(r'^\s*GEEK.geekitemPreload = ({.*?})\s*;$',
                        script_tag.string, flags=re.DOTALL | re.MULTILINE).group(1)

    # Parse the JSON object
    d = json.loads(json_text)
    data = d['item']['stats']
    data['minplayers'] = d['item']['minplayers']
    data['maxplayers'] = d['item']['maxplayers']
    data['minplaytime'] = d['item']['minplaytime']
    data['maxplaytime'] = d['item']['maxplaytime']
    data['yearpublished'] = d['item']['yearpublished']
    data['description'] = d['item']['description']
    data['short_description'] = d['item']['short_description']

    # Find name, description, and image URL
    # To select the meta tag with property 'og:title'
    meta_og_title = soup.select_one('meta[property="og:title"]')
    # To get the content of the meta tag
    title = meta_og_title['content'] if meta_og_title else None

    
    if not os.path.exists(id):
        os.mkdir(id)

    with open(f'{id}\data.json', 'w') as f:
        json.dump(data, f, indent=2, sort_keys=True)
    
    # To select the meta tag with property 'og:description'
    meta_og_description = soup.select_one('meta[property="og:description"]')
    # To get the content of the meta tag
    short_description = meta_og_description['content'].replace('&quot;', '') if meta_og_description else None
    # To select the meta tag with property 'og:image'
    meta_og_image = soup.select_one('meta[property="og:image"]')
    # To get the content of the meta tag
    image_url = meta_og_image['content'] if meta_og_image else None

    # Save name and description to a yml file
    d = {'id': id, 'name': title, 'description': short_description, 'q_rules': '', 'links': [],  'labels': [], 'url': url, 'image_url': image_url, 'notes': ''}

    with open(f'{id}\data.yml', 'w') as f:
        yaml.dump(d, f, default_flow_style=False, sort_keys=False)

    # Assuming 'image_url' is the URL of the image
    if get_images:
        response = requests.get(image_url, stream=True)

        # Check if the request was successful
        if response.status_code == 200:
            # Open a file in write mode and write the image content to it
            with open(f'{id}\image.jpg', 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)