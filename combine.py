import os
import json
from unidecode import unidecode

combined = []
names = []
files = os.listdir()
for file in files:
    if not file.endswith(".json"): continue
    if not "ls_" in file: continue
    with open(file) as f:
        for a in json.load(f):
            if 'title_orthography' in a.keys():
                wrd = unidecode(a['title_orthography'])
                if not ", " in wrd:
                    combined.append(a)
                    names.append( wrd )

with open("combined.json", "w") as out:
    json.dump(combined, out)

with open("words.json", "w") as out:
    json.dump(names, out)