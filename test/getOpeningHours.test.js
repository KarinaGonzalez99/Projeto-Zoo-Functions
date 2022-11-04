const getOpeningHours = require('../src/getOpeningHours');

// testes baseados em exercicios das aulas primeiros passos em JEST
describe('Testes da função getOpeningHours', () => {
  it('Verifica 1', () => {
    expect(typeof getOpeningHours).toThrow('function');
  });
  it('Verifica 2', () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    expect(() => { getOpeningHours('Thursday', '08:00-cachorrinho'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Verifica 3', () => {
    expect(() => getOpeningHours(['AM', 'PM'])).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica 4', () => {
    expect(() => getOpeningHours(['AM', 'PM'])).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica 5', () => {
    expect(getOpeningHours()).toBe();
  });
  it('Verifica 6', () => {
    expect().toEqual();
  });
  it('Verifica 7', () => {
    expect(getOpeningHours()).toBe();
  });
  it('Verifica 8', () => {
    expect(getOpeningHours()).toEqual();
  });
  it('Verifica 9', () => {
    expect(getOpeningHours()).toBe();
  });
});
