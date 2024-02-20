import requests
from bs4 import BeautifulSoup
import os
import urllib.request
import html
import json

# Read URLs from db.txt
with open('C:\\Users\\sumeg\\Documents\\repos\\midheavy\\db.txt', 'r') as f:
    urls = f.read().splitlines()

results = []
full_refresh = True
for url in urls:
    id = url.split('/')[-1]
    if not full_refresh and os.path.exists(id):
        continue
    print("Loading: " + url)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find name, description, and image URL
    # To select the meta tag with property 'og:title'
    meta_og_title = soup.select_one('meta[property="og:title"]')
    # To get the content of the meta tag
    title = meta_og_title['content'] if meta_og_title else None
    
    if not os.path.exists(id):
        os.mkdir(id)
    
    # To select the meta tag with property 'og:description'
    meta_og_description = soup.select_one('meta[property="og:description"]')
    # To get the content of the meta tag
    short_description = meta_og_description['content'].replace('&quot;', '') if meta_og_description else None
    # To select the meta tag with property 'og:image'
    meta_og_image = soup.select_one('meta[property="og:image"]')
    # To get the content of the meta tag
    image_url = meta_og_image['content'] if meta_og_image else None

    # Save name and description to a text file
    with open(f'{id}\{id}.txt', 'w') as f:
        f.write(f'URL: {url}\nName: {title}\nDescription: {short_description}\nImage URL: {image_url}\n')
    results.append({'id': id, 'url': url, 'title': title, 'short_description': short_description, 'image_url': image_url, 'image_url_local': f'{id}\image.jpg', 'q_rules' : []})

    # Assuming 'image_url' is the URL of the image
    response = requests.get(image_url, stream=True)

    # Check if the request was successful
    if response.status_code == 200:
        # Open a file in write mode and write the image content to it
        with open(f'{id}\image.jpg', 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)

with open("script.js") as f:
    lines = f.readlines()
lines[0] = f'data = {results} \n'
with open("script.js", "w") as f:
    f.writelines(lines)