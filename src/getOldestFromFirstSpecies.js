const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const bichinhus = employees.find((cuidador) =>
    cuidador.id === id).responsibleFor[0];
  const vovos = species.find((vovo) => vovo.id === bichinhus).residents.sort((index, i) =>
    i.age - index.age);
  return vovos.map((animaiszinhos) =>
    Object.keys(animaiszinhos).map((key) => animaiszinhos[key]))[0];
}

module.exports = getOldestFromFirstSpecies;
