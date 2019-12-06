String.prototype.replaceDiacriticalMarks = require('./replaceDiacriticalMarks');
String.prototype.removePunctuationMarks = require('./removePunctuationMarks');

const isPalindrome = input => {
  const normalizedInput = input.replace(/ /g, '').toLowerCase().replaceDiacriticalMarks().removePunctuationMarks();
  return normalizedInput === normalizedInput.split("").reverse().join("");
};

module.exports = isPalindrome;
