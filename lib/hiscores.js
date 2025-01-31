const axios = require("axios");
const {
  hiscoreSkillEntryOrder,
  hiscoreMinigameEntryOrder
} = require("./constants");

const csvTo2dArray = (csv) => csv.split("\n").map((line) => line.split(","));

const mapSkill = (skill) => ({ rank: skill[0], level: skill[1], experience: skill[2] });
const mapMinigame = (minigame) => ({ rank: minigame[0], score: minigame[1]});

const statMapping = hiscoreSkillEntryOrder.map((skill) => ({ name: skill, mappingFunction: mapSkill }))
.concat(hiscoreMinigameEntryOrder.map((minigame) => ({ name: minigame, mappingFunction: mapMinigame })))

const mapPlayerStats = (playerStats) => playerStats.reduce((mappedPlayerStats, playerStat, playerStatIndex) => {
  const stat = statMapping[playerStatIndex];
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
