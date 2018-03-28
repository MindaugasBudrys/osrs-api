# osrs-api
A node.js-based wrapper for [OSRS](http://oldschool.runescape.com/)'s hiscores API and Grand Exchange API. Forked from [atjeff/Osrs-Wrapper](https://github.com/atjeff/Osrs-Wrapper).

## Installation 
```
$ npm install --save osrs-api
```

## Usage

### Hiscores

#### `playerTypes`

For convenience, the following object is exported containing valid player types:

```javascript
{
  normal: "normal",
  ironman: "ironman",
  ultimateIronman: "ultimate",
  hardcoreIronman: "hardcore_ironman",
  deadman: "deadman",
  seasonal: "seasonal"
}
```

#### `getPlayer({ name, type })`

Used to retrieve a player's hiscore entry.

##### Example

```javascript
const { hiscores } = require("osrs-api");

hiscores.getPlayer({ name: "Sadie Miller", type: hiscores.playerTypes.hardcoreIronman }).then(console.log).catch(console.error);
```

##### Output

```javascript
{
  name: "Sadie Miller",
  type: "hardcore_ironman",
  overall: { rank: "5399", level: "1200", experience: "7164307" },
  attack: { rank: "4891", level: "64", experience: "448334" },
  defence: { rank: "3799", level: "64", experience: "435491" },
  strength: { rank: "4006", level: "70", experience: "749071" },
  hitpoints: { rank: "5029", level: "66", experience: "538854" },
  ranged: { rank: "9132", level: "48", experience: "88163" },
  prayer: { rank: "7234", level: "44", experience: "56690" },
  magic: { rank: "7309", level: "60", experience: "283069" },
  cooking: { rank: "8854", level: "59", experience: "257180" },
  woodcutting: { rank: "2869", level: "72", experience: "911090" },
  fletching: { rank: "8171", level: "56", experience: "190596" },
  fishing: { rank: "4647", level: "70", experience: "772902" },
  firemaking: { rank: "19938", level: "61", experience: "312150" },
  crafting: { rank: "6371", level: "51", experience: "121833" },
  smithing: { rank: "4682", level: "52", experience: "124557" },
  mining: { rank: "1486", level: "73", experience: "1016912" },
  herblore: { rank: "3221", level: "50", experience: "106477" },
  agility: { rank: "7425", level: "66", experience: "533348" },
  thieving: { rank: "6968", level: "52", experience: "126391" },
  slayer: { rank: "11707", level: "26", experience: "9100" },
  farming: { rank: "3831", level: "45", experience: "66951" },
  runecrafting: { rank: "12438", level: "14", experience: "2225" },
  hunter: { rank: "25687", level: "9", experience: "1000" },
  construction: { rank: "7707", level: "28", experience: "11923" },
  easyClueScrolls: { rank: "-1", score: "-1" },
  mediumClueScrolls: { rank: "-1", score: "-1" },
  clueScrolls: { rank: "-1", score: "-1" },
  bountyHunter: { rank: "-1", score: "-1" },
  bountyHunterRogues: { rank: "-1", score: "-1" },
  hardClueScrolls: { rank: "-1", score: "-1" },
  lastManStanding: { rank: "-1", score: "-1" },
  eliteClueScrolls: { rank: "-1", score: "-1" },
  masterClueScrolls: { rank: "-1", score: "-1" }
}
```

#### `getPlayers([{ name, type }, ...])`

Used to retrieve multiple players' hiscore entries.

#### `createHiscoresInterface(axiosInstance)`

Used to create a new interface using a custom instance of `axios`. Exposes `getPlayer` and `getPlayers`.

##### Example

```javascript
const axios = require("axios");
const { hiscores } = require("osrs-api");

const hiscoresInterface = hiscores.createHiscoresInterface(axios.create());
```

### Grand Exchange

#### `getItem(itemId)`

Used to retrieve an item's Grand Exchange details.

##### Example

```javascript
const { grandExchange } = require("osrs-api");

grandExchange.getItem(2).then(console.log).catch(console.error);
```

##### Output

```javascript
{
  item: {
    icon: "http://services.runescape.com/m=itemdb_oldschool/1522058952475_obj_sprite.gif?id=2",
    icon_large: "http://services.runescape.com/m=itemdb_oldschool/1522058952475_obj_big.gif?id=2",
    id: 2,
    type: "Default",
    typeIcon: "http://www.runescape.com/img/categories/Default",
    name: "Cannonball",
    description: "Ammo for the Dwarf Cannon.",
    current: { trend: "neutral", price: 166},
    today: { trend: "positive", price: "+2" },
    members: "true",
    day30: { trend: "negative", change: "-8.0%"},
    day90: { trend: "negative", change: "-11.0%"},
    day180: { trend: "negative", change: "-8.0%"}
  }
}
```

#### `getGraph(itemId)`

Used to retrieve an item's Grand Exchange price data for the last six months.

##### Example

```javascript
const { grandExchange } = require("osrs-api");

grandExchange.getGraph(2).then(console.log).catch(console.error);
```

##### Output

```javascript
{
  daily: {
    1506729600000: 186,
    // ...
    1522195200000: 166
  },
  average: {
    1506729600000: 185,
    // ...
    1522195200000: 169
  }
}
```

#### `createGrandExchangeInterface(axiosInstance)`

Used to create a new interface using a custom instance of `axios`. Exposes `getItem` and `getGraph`.

##### Example

```javascript
const axios = require("axios");
const { grandExchange } = require("osrs-api");

const grandExchangeInterface = grandExchange.createGrandExchangeInterface(axios.create());
```