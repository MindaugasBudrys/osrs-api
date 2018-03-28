const axios = require("axios");

const createItemDetailUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`
const createItemGraphUrl = (itemId) => `http://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`

const createGetItem = (axiosInstance) => (itemId) => {
  const grandExchangeResponse = await axiosInstance.get(createItemDetailUrl(itemId));
  return grandExchangeResponse.data;
};

const createGetGraph = (axiosInstance) => (itemId) => {
  const grandExchangeResponse = await axiosInstance.get(createItemGraphUrl(itemId));
  return grandExchangeResponse.data;
};

const createGrandExchangeInterface = (axiosInstance) => ({
  getItem: createGetItem(axiosInstance),
  getGraph: createGetGraph(axiosInstance)
});

exports.createGrandExchangeInterface = createGrandExchangeInterface;
exports.getItem = createGetItem(axios.create());
exports.getGraph = createGetGraph(axios.create());