const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica 1', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Verifica 2', () => {
    expect(handlerElephants(' ')).toBe(null);
  });
  it('Verifica 3', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica 4', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('Verifica 5', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica 6', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica 7', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica 8', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica 9', () => {
    expect(handlerElephants('elephant')).not.toBe(undefined);
  });
  it('Verifica 10', () => {
    expect(typeof handlerElephants).toBe('function');
  });
});
