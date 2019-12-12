const assert = require('assert');

const isPalindrome = require('../lib/isPalindrome');

describe('isPalindrome', () => {
  describe('check palindrome word', () => {
    it('should return false if the input is NOT of type string', () => {
      assert.equal(isPalindrome(1), false);
      assert.equal(isPalindrome({}), false);
    });

    it('should return false if the word is NOT a palindrome', () => {
      const result = isPalindrome('palíndromo');
      assert.equal(result, false);
    });

    it('should return true if the word is a palindrome', () => {
      const result = isPalindrome('reconocer');
      assert.equal(result, true);
    });

    it('should return true if the word is a palindrome with different number of white spaces at both ends', () => {
      const result = isPalindrome('   reconocer ');
      assert.equal(result, true);
    });
  });

  describe('check palindrome sentence', () => {
    it('should return false if the sentence is NOT a palindrome', () => {
      const result = isPalindrome('Esto no es un palíndromo');
      assert.equal(result, false);
    });

    it('should return true if the sentence is a palindrome', () => {
      const result = isPalindrome('Arriba birra');
      assert.equal(result, true);
    });

    it('should return true if the sentence is a palindrome with different number of white spaces at both ends', () => {
      const result = isPalindrome('   Arriba birra ');
      assert.equal(result, true);
    });
  });

  describe('special cases', () => {
    it('should transform diacritical marks into normalized characters and return true if the word / sentence with diacritical marks is a palindrome', () => {
      const result = isPalindrome('Isaac no ronca así');
      assert.equal(result, true);
    });

    it('should not transform \'ñ\' character and return false if the word / sentence containing \'ñ\' is NOT a palindrome', () => {
      const result = isPalindrome('Añora la rona');
      assert.equal(result, false);
    });

    it('should not transform \'ñ\' character and return true if the word / sentence containing \'ñ\' is a palindrome', () => {
      const result = isPalindrome('Añora la roña');
      assert.equal(result, true);
    });

    it('should skip punctuation marks and return true if the word / sentence containing punctuation marks is a palindrome', () => {
      const result = isPalindrome('¿Acaso hubo búhos acá?');
      assert.equal(result, true);
    });
  });
});
