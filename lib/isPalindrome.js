String.prototype.replaceDiacriticalMarks = require('./replaceDiacriticalMarks'); // eslint-disable-line no-extend-native
String.prototype.removePunctuationMarks = require('./removePunctuationMarks'); // eslint-disable-line no-extend-native

const isPalindrome = input => {
  if (typeof input !== 'string' && !(input instanceof String)) return false;

  const normalizedInput = input
    .replace(/ /g, '')
    .toLowerCase()
    .replaceDiacriticalMarks()
    .removePunctuationMarks();

  const reversedNormalizedInput = normalizedInput
    .split('')
    .reverse()
    .join('');

  return normalizedInput === reversedNormalizedInput;
};

module.exports = isPalindrome;
