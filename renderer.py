import os
import yaml

# Get all directories in the current folder
dirs = [d for d in os.listdir('.') if os.path.isdir(d) and d != '.git' ]

games = []
for dir in dirs:
    with open(f'{dir}/data.yml', 'r') as f:
        g = yaml.load(f, Loader=yaml.FullLoader)
        games.append(g)

lines = []
with open('script.js', 'r') as f:
    lines = f.readlines()
lines[0] = f'const games = {games};\n'

# Write the template to a file
with open('script.js', 'w') as f:
    f.writelines(lines)
