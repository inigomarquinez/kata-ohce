const assert = require('assert');

String.prototype.replaceDiacriticalMarks = require('../lib/replaceDiacriticalMarks');

describe('removeDiacriticalMarks', () => {
  it('should replace diacritical marks from a string so the transformed string is not the same as the original one', () => {
    const original = 'áéíóú';
    const transformed = original.replaceDiacriticalMarks();
    assert.notEqual(original, transformed);
  });

  it('should replace diacritical marks from a string so the transformed string is the same as the original one replacing diacritical marks by normalized characters', () => {
    const transformed = 'áéíóú'.replaceDiacriticalMarks();
    const expected = 'aeiou';
    assert.equal(transformed, expected);
  });

  it('should not replace the special character \'ñ\'', () => {
    const transformed = 'eñe'.replaceDiacriticalMarks();
    const expected = 'eñe';
    assert.equal(transformed, expected);
  });
});
