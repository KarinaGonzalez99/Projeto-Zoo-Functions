const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
};

module.exports = getEmployeeByName;
