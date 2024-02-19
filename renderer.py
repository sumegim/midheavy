import os

template = """
const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < releases.length; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    
    const link = document.createElement('a');
    link.setAttribute('href', urls[i]);

    const img = document.createElement('img');
    img.setAttribute('src', releases[i] + '/image.jpg');

    tile.appendChild(img);
    
    const middle = document.createElement('div');
    middle.classList.add('middle');

    const text = document.createElement('div');
    text.classList.add('text');
    text.innerText = descs[i];
    link.appendChild(text)

    middle.appendChild(link);
    tile.appendChild(middle);
    container.appendChild(tile);
}

document.body.appendChild(container);
"""

# Get all directories in the current folder
dirs = [d for d in os.listdir('.') if os.path.isdir(d) and d != '.git' ]
releases = "const releases = [" + ', '.join([f"'{d}'" for d in dirs]) + "];"

x = ''
for dir in dirs:
    with open(f'{dir}/{dir}.txt', 'r') as f:
        x += f'"{f.read().splitlines()[1].split(": ")[1]}", '
titles ="const titles = [" + x + "];"


y = ''
for dir in dirs:
    with open(f'{dir}/{dir}.txt', 'r') as f:
        y += f'"{f.read().splitlines()[0].split(": ")[1]}", '
urls ="const urls = [" + y + "];"

z = ''
for dir in dirs:
    with open(f'{dir}/{dir}.txt', 'r') as f:
        z += f'"{f.read().splitlines()[2].split(": ")[1]}", '
descs ="const descs = [" + z + "];"


# Write the template to a file
with open('script.js', 'w') as f:
    f.write(urls + descs + titles + releases + template)

print(dirs)