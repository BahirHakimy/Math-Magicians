import calculate from '../logic/calculate';

describe('Checks for all mathimatical operations are working correctly.', () => {
  test('When two numbers are clicked conscutively.', () => {
    expect(calculate({ total: null, next: '2', operation: null }, '2')).toEqual({ total: null, next: '22' });
  });
  test('Add two numbers', () => {
    expect(calculate({ total: '2', next: '2', operation: '+' }, '=')).toEqual({ total: '4', next: null, operation: null });
  });
  test('Subtracts two numbers', () => {
    expect(calculate({ total: '2', next: '2', operation: '-' }, '=')).toEqual({ total: '0', next: null, operation: null });
  });
  test('Multiplies two numbers', () => {
    expect(calculate({ total: '2', next: '2', operation: 'x' }, '=')).toEqual({ total: '4', next: null, operation: null });
  });
  test('Divides two numbers', () => {
    expect(calculate({ total: '2', next: '2', operation: '÷' }, '=')).toEqual({ total: '1', next: null, operation: null });
  });
  test('Finds the modulo of two numbers', () => {
    expect(calculate({ total: '2', next: '2', operation: '%' }, '=')).toEqual({ total: '0', next: null, operation: null });
  });
  test('When a number is clicked after an operation is clicked', () => {
    expect(calculate({ total: '2', next: null, operation: '+' }, '2')).toEqual({ total: '2', next: '2', operation: '+' });
  });
  test('When a number is clicked after an operation is clicked', () => {
    expect(calculate({ total: '2', next: null, operation: '-' }, '2')).toEqual({ total: '2', next: '2', operation: '-' });
  });
});
