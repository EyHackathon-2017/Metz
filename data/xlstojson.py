import csv
import json

def dump_json(obj, out):
    json.dump(obj, out, indent=2)
    return

with open('CX_flights.csv', 'r') as f:
    read = csv.DictReader(f)
    # rows = list(read)
    json_list = []
    i = 0
    for row in read:
        if i <= 50:
            json_list.append(row)
            i += 1
        else:
            exit
    
with open('CX_flight_json.json', 'w') as f:
    dump_json(json_list, f)
