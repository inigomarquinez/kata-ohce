String.prototype.replaceDiacriticalMarks = require('./replaceDiacriticalMarks');
String.prototype.removePunctuationMarks = require('./removePunctuationMarks');

const isPalindrome = input => {
  if (typeof input !== 'string' && !(input instanceof String)) return false;

  const normalizedInput = input.replace(/ /g, '').toLowerCase().replaceDiacriticalMarks().removePunctuationMarks();
  return normalizedInput === normalizedInput.split("").reverse().join("");
};

module.exports = isPalindrome;
