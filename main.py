import json

results = None

# Read / Write to Dict
with open('./data.json', 'r') as file:
    data = file.read()
    jsonData = json.loads(data)
    results = jsonData

print('results', results)
