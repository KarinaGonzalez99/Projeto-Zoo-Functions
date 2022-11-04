const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adultos = entrants.filter((visi) =>
    visi.age >= 18 && visi.age < 49.99);
  const idosos = entrants.filter((visi) =>
    visi.age >= 49.99);
  const criancas = entrants.filter((visi) =>
    visi.age < 18);

  return { child: criancas.length, adult: adultos.length, senior: idosos.length };
}

function calculateEntry(entrants) {
  if (typeof entrants !== 'object') {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrada = countEntrants(entrants);
  const qntidade = Object.entries(entrada);
  return qntidade.reduce((total, [group, quantity]) => total + quantity * data.prices[group], 0);
}

module.exports = { calculateEntry, countEntrants };
