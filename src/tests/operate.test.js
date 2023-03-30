import operate from '../logic/operate';

describe('Operate test', () => {
  describe('Sum method', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(operate(1, 2, '+')).toBe('3');
    });
  });
  describe('subtract method', () => {
    test(' 2 - 1 is equal 1', () => {
      expect(operate(2, 1, '-')).toBe('1');
    });
  });
  describe('divide method', () => {
    test(' 2/2 is equal 1', () => {
      expect(operate(2, 2, '÷')).toBe('1');
    });
  });
  describe('multiply method', () => {
    test(' 3 * 3 is equal 9', () => {
      expect(operate(3, 3, 'x')).toBe('9');
    });
  });
  describe('Modulo method', () => {
    test(' 2 % 2 is equal 0', () => {
      expect(operate(3, 3, '%')).toBe('0');
    });
  });
});
