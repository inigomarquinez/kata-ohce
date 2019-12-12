const assert = require('assert');

String.prototype.removePunctuationMarks = require('../lib/removePunctuationMarks'); // eslint-disable-line no-extend-native

describe('removePunctuationMarks', () => {
  it('should remove punctuation marks from a string so the transformed string is not the same as the original one', () => {
    const original = '¡Hola! ¿Qué tal?';
    const transformed = original.removePunctuationMarks();
    assert.notEqual(original, transformed);
  });

  it('should remove punctuation marks from a string so the transformed string is the same as the original one removing punctuation marks', () => {
    const transformed = '¡Hola! ¿Qué tal?'.removePunctuationMarks();
    const expected = 'Hola Qué tal';
    assert.equal(transformed, expected);
  });
});
