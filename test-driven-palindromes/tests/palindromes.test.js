const palindromes = require('../palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecare')).toEqual(['racecar']);
  });
});
