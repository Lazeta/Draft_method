// Polyfill , Полифил
// Этот метод был добавлен к спецификации ECMAScript 6 и может быть доступен ещё не во всех реализациях JavaScript. 
// Однако, вы можете легко эмулировать этот метод при помощи следующего кода:
if (!String.prototype.endsWith) {
    Object.defineProperty(String.prototype, 'endsWith', {
      value: function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
          position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      }
    });
}