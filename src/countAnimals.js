const data = require('../data/zoo_data');

const { species } = data;

const animais = {};

function countAnimals(animal) {
  if (!animal) {
    species.forEach((bichinhus) => {
      animais[bichinhus.name] = bichinhus.residents.length;
    });
    return animais;
  }
  if (!animal.sex) {
    return species.find((bichuss) => bichuss.name === animal.specie).residents.length;
  }
  const animals = species.find((bichos) =>
    bichos.name === animal.specie).residents.filter((moradores) =>
    moradores.sex === animal.sex).length;
  return animals;
}

module.exports = countAnimals;
