const data = require('../data/zoo_data');

const { species } = data; // necessário chaves para especificar o item

const getSpeciesByIds = (...ids) => {
  const encontre = species.filter((index) => ids.some((id) => index.id === id)); // resolver primeiro dentro dps fora
  return encontre;
};

module.exports = getSpeciesByIds;
