const removePunctuationMarks = function replaceDiacriticalMarks() {
  return this.replace(/[^A-Za-z0-9ñÑáÁéÉíÍóÓúÚüÜ ]+/g, '');
};

module.exports = removePunctuationMarks;
