const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const bichinhu = species.find((index) => index.name === animal);
  return bichinhu.residents.every((i) => i.age >= age);
};

module.exports = getAnimalsOlderThan;
