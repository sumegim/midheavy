import os
import yaml

template = """
const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < games.length; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    
    const link = document.createElement('a');
    link.setAttribute('href', games[i].url);
    link.classList.add('text-link'); // Add a class to the link elements

    const img = document.createElement('img');
    img.setAttribute('src', games[i].id + '/image.jpg');

    tile.appendChild(img);
    
    const middle = document.createElement('div');
    middle.classList.add('middle');

    const text = document.createElement('div');
    text.classList.add('text');
    text.innerText = games[i].description;
    link.appendChild(text)

    middle.appendChild(link);
    tile.appendChild(middle);
    container.appendChild(tile);
}

document.body.appendChild(container);
"""

# Get all directories in the current folder
dirs = [d for d in os.listdir('.') if os.path.isdir(d) and d != '.git' ]

games = []
for dir in dirs:
    with open(f'{dir}/data.yml', 'r') as f:
        g = yaml.load(f, Loader=yaml.FullLoader)
        games.append(g)

data_injection = f'const games = {games}'

# Write the template to a file
with open('script.js', 'w') as f:
    f.write(data_injection + template)
