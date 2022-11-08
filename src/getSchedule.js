const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;

const horas = Object.keys(hours);

function bichin(day) {
  return species.filter((specie) =>
    specie.availability.includes(day)).map((animal) =>
    animal.name);
}

function dias() {
  const diasebichinhuss = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    Tuesday: { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
      exhibition: bichin('Tuesday') },
    Wednesday: { officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
      exhibition: bichin('Wednesday') },
    Thursday: { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
      exhibition: bichin('Thursday') },
    Friday: { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
      exhibition: bichin('Friday') },
    Saturday: { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
      exhibition: bichin('Saturday') },
    Sunday: { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
      exhibition: bichin('Sunday') },
  };
  return diasebichinhuss;
}

function getSchedule(scheduleTarget) {
  const especie = species.find((index) =>
    index.name === scheduleTarget);

  const verificaDia = (dia) =>
    horas.some((dayCheck) =>
      dayCheck === dia);

  if (verificaDia(scheduleTarget)) {
    const diasDaSemana = dias();

    return { [scheduleTarget]: diasDaSemana[scheduleTarget] };
  }

  if (especie !== undefined) {
    return especie.availability;
  }

  return dias();
}

module.exports = getSchedule;
