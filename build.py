import yaml
import re

fConfigMaster = open("./config.yaml", "rt")
with open("../beetsdir/config.yaml", "wt", newline="") as fOut:
    with open("../customconfig.yaml", "rt") as stream:
        dataConfigOwn = yaml.safe_load(stream)

    for line in fConfigMaster:
        prog = re.compile("@(.*)@")
        match = prog.search(line)
        sOut = line
        if match:
            if data := dataConfigOwn.get(match.group(1)):
                # TODO doesnt work if the # isnt the first char in the line, e.g. with indent, for example `    #google_API_key: @google_API_key@`
                sOut = line[1:].replace(match.group(), data)
        fOut.write(sOut)

    fConfigMaster.close()
