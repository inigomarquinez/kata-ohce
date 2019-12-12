/**
 * @see https://es.stackoverflow.com/questions/62031/eliminar-signos-diacr%C3%ADticos-en-javascript-eliminar-tildes-acentos-ortogr%C3%A1ficos
 */
const replaceDiacriticalMarks = function replaceDiacriticalMarks() {
  return this
    .normalize('NFD')
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, '$1') // eslint-disable-line no-misleading-character-class
    .normalize();
};

module.exports = replaceDiacriticalMarks;
