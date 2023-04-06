import operate from '../logic/operate';

describe('Checks for all mathimatical operations are working correctly.', () => {
  test('Adds two numbers', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('Subtracts two numbers', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('Multiplies two numbers', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('Divides two numbers', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
  test('Finds the modulo of two numbers', () => {
    expect(operate(2, 2, '%')).toBe('0');
  });
});
