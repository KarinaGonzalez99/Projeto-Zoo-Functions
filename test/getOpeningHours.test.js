const getOpeningHours = require('../src/getOpeningHours');

// testes baseados em exercicios das aulas primeiros passos em JEST
describe('Testes da função getOpeningHours', () => {
  it('Verifica 1', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica 2', () => {
    expect(() => getOpeningHours('Wednesday', '08:00-cachorrinho')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Verifica 3', () => {
    expect(() => getOpeningHours('Wednesday', '18:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Verifica 4', () => {
    expect(getOpeningHours('Wednesday', '08:00-AM')).toBe('The zoo is open');
  });

  it('Verifica 5', () => {
    expect(getOpeningHours('Wednesday', '07:00-PM')).toBe('The zoo is closed');
  });

  it('Verifica 6', () => {
    expect(() => getOpeningHours('Wednesday', 'what')).toThrow(new Error('The what should represent a number'));
  });

  it('Verifica 7', () => {
    expect(() => getOpeningHours('Wednesday', '08:80-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });

  it('Verifica 8', () => {
    expect(() => getOpeningHours('cachorrinho', '08:00-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
});
