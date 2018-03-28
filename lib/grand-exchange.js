const axios = require("axios");

const createItemDetailUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`
const createItemGraphUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`

const getItem = async (itemId) => {
  const grandExchangeResponse = await axios.get(createItemDetailUrl(itemId));
  return grandExchangeResponse.data;
};

const getGraph = async (itemId) => {
  const grandExchangeResponse = await axios.get(createItemGraphUrl(itemId));
  return grandExchangeResponse.data;
};

exports.getItem = getItem;
exports.getGraph = getGraph;
