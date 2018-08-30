var words = ["ground", "control", "to", "major", "tom"];
var array = [];

var wordLength = words.map(function(word) {
  return word.length;
});

console.log(wordLength)

var wordUpper = words.map(function(word) {
  return word.toUpperCase();
});

console.log(wordUpper)

var wordReverse = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(wordReverse)
