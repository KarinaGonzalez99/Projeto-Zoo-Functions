const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  const encontre = species.filter((index) => ids.some((id) => index.id === id));
  return encontre;
};

module.exports = getSpeciesByIds;
