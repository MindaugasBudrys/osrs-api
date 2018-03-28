const axios = require("axios");

const playerTypes = {
  normal: "normal",
  ironman: "ironman",
  ultimateIronman: "ultimate",
  hardcoreIronman: "hardcore_ironman",
  deadman: "deadman",
  seasonal: "seasonal"
};

const csvTo2dArray = (csv) => csv.split("\n").map((line) => line.split(","));

const mapSkill = (skill) => ({ rank: skill[0], level: skill[1], experience: skill[2] });
const mapMinigame = (minigame) => ({ rank: minigame[0], score: minigame[1]});

const stats = [
  { name: "overall", mappingFunction: mapSkill},
  { name: "attack", mappingFunction: mapSkill},
  { name: "defence", mappingFunction: mapSkill},
  { name: "strength", mappingFunction: mapSkill},
  { name: "hitpoints", mappingFunction: mapSkill},
  { name: "ranged", mappingFunction: mapSkill},
  { name: "prayer", mappingFunction: mapSkill},
  { name: "magic", mappingFunction: mapSkill},
  { name: "cooking", mappingFunction: mapSkill},
  { name: "woodcutting", mappingFunction: mapSkill},
  { name: "fletching", mappingFunction: mapSkill},
  { name: "fishing", mappingFunction: mapSkill},
  { name: "firemaking", mappingFunction: mapSkill},
  { name: "crafting", mappingFunction: mapSkill},
  { name: "smithing", mappingFunction: mapSkill},
  { name: "mining", mappingFunction: mapSkill},
  { name: "herblore", mappingFunction: mapSkill},
  { name: "agility", mappingFunction: mapSkill},
  { name: "thieving", mappingFunction: mapSkill},
  { name: "slayer", mappingFunction: mapSkill},
  { name: "farming", mappingFunction: mapSkill},
  { name: "runecrafting", mappingFunction: mapSkill},
  { name: "hunter", mappingFunction: mapSkill},
  { name: "construction", mappingFunction: mapSkill},
  { name: "easyClueScrolls", mappingFunction: mapMinigame},
  { name: "mediumClueScrolls", mappingFunction: mapMinigame},
  { name: "clueScrolls", mappingFunction: mapMinigame},
  { name: "bountyHunter", mappingFunction: mapMinigame},
  { name: "bountyHunterRogues", mappingFunction: mapMinigame},
  { name: "hardClueScrolls", mappingFunction: mapMinigame},
  { name: "lastManStanding", mappingFunction: mapMinigame},
  { name: "eliteClueScrolls", mappingFunction: mapMinigame},
  { name: "masterClueScrolls", mappingFunction: mapMinigame}
];

const mapPlayerStats = (playerStats) => playerStats.reduce((mappedPlayerStats, playerStat, playerStatIndex) => {
  const stat = stats[playerStatIndex];
  return stat ? Object.assign({}, mappedPlayerStats, { [stat.name]: stat.mappingFunction(playerStat) }) : mappedPlayerStats;
}, {});

const appendPlayer = (playerStats, player) => Object.assign({}, playerStats, player);

const createHiscoreUrl = (playerType) =>
  `http://services.runescape.com/m=hiscore_oldschool${(playerType == "normal" || !playerType) ? "" : `_${playerType}`}/index_lite.ws`; // TODO: Make this cleaner

const createGetPlayer = (axiosInstance) => async ({ name = "", type = ""} = {}) => {
  const hiscoreResponse = await axiosInstance.get(createHiscoreUrl(type), {
    params: { player: name }
  });

  return appendPlayer(mapPlayerStats(csvTo2dArray(hiscoreResponse.data)), { name, type});
};

const createGetPlayers = (axiosInstance) => async (players = []) => {
  return await Promise.all(players.map(createGetPlayer(axiosInstance)));
}

const createHiscoresInterface = (axiosInstance) => ({
  getPlayer: createGetPlayer(axiosInstance),
  getPlayers: createGetPlayers(axiosInstance)
});

exports.createHiscoresInterface = createHiscoresInterface;
exports.getPlayer = createGetPlayer(axios.create());
exports.getPlayers = createGetPlayers(axios.create());
exports.playerTypes = playerTypes;
