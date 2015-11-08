# beets-config

Config for https://github.com/sampsyo/beets

## Currently used commands

- `beet import somefolderorarchiv`
- `beet ls -a 'added:yyyy-mm-dd'`

## Install

1. [Install beets](http://beets.readthedocs.org/page/guides/main.html#installing)
1. Install Node.js (which includes npm)
1. Download beets-config
1. Install dependencies
1. Run `npm install`
1. Create `../customconfig.yaml` and configure all properties you want to replace, probably at least `directory` and `library`
1. Run `gulp`
1. [Set `BEETSDIR` to the created folder `../beetsdir`](https://beets.readthedocs.org/en/stable/reference/config.html#configuration-location)
  - Windows: Set as user variable
1. Check loaded config: Type `beet config -p` to see the path on your system
1. TODO
1. ???
1. Profit!
