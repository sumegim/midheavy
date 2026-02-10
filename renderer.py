import json
import os
import yaml
import pandas as pd

# Get all directories in the current folder
dirs = [d for d in os.listdir('.') if os.path.isdir(d) and d != '.git' ]

games = []
for dir in dirs:
    if dir == '_dump':
        continue
    with open(f'{dir}/data.yml', 'r') as f:
        g = yaml.load(f, Loader=yaml.FullLoader)
        with open(f'{dir}/data.json', 'r') as f2:
            g['stats'] = json.load(f2)
        games.append(g)

lines = []
with open('script.js', 'r') as f:
    lines = f.readlines()
lines[0] = f'const games = {games};\n'

# Write the template to a file
with open('script.js', 'w') as f:
    f.writelines(lines)

# Normalize the games dictionary and convert it to a DataFrame
df = pd.json_normalize(games)

# Write the DataFrame to a CSV file
df.to_csv('games.csv', index=False)