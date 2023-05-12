import os
import json
from unidecode import unidecode

combined = []
names = []
files = os.listdir()
unknownParts = []

for file in files:
    if not file.endswith(".json"): continue
    if not "ls_" in file: continue
    with open(file) as f:
        for a in json.load(f):
            wrd = ""
            
            if 'title_orthography' in a.keys() and not ", " in wrd:
                wrd = unidecode(a['title_orthography'])
            else:
                part = a['part_of_speech']
                
                mainNoteT = [
                    "verb",
                    "adverb",
                    "P. a.",
                ]
                keyT = [
                    "adjective",
                    "adj.adj.",
                    "adj.adj.adj.",
                    "adv.adv.adv.prep.adv.adv.",
                    "adj.adv.",
                    "interjection",
                    "v. n.v. n.P. a.adv.",
                    "v. n.P. a.",
                    None,
                    "adv.Subst",
                    "P. a.v. a.P. a."
                ]
                
                if part in mainNoteT:
                    wrd = unidecode(a['main_notes'].split(", ")[0])
                elif part in keyT:
                    wrd = unidecode(a['key'])
                else:
                    wrd = unidecode(a['key'])
                    #if not part in unknownParts: unknownParts.append(part)
                    #print(part, file)
            
            if wrd != "" and set(wrd).issubset(set('abcdefghiklmnoprstvxyz-')):
                combined.append(a)
                names.append( wrd.lower() )

with open("combined.json", "w") as out:
    json.dump(combined, out)

with open("words.json", "w") as out:
    json.dump(names, out)

print(unknownParts)