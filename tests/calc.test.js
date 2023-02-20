import calc from '../public/assets/calc.js';

describe('Функция калькулятор', function () {
  it('перемножает 2 числа', function () {
    const expectedResult = 8;
    const result = calc(3, 5);
    if (result !== expectedResult) {
      throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
  });
});
