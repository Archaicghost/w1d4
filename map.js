var words = ["ground", "control", "to", "major", "tom"];
map(words, function(word) { return word.length; })

function map(array, cb) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
  	mapped.push(cb(array[i]))
  }
  console.log(mapped)

}



// console.log(wordLength)

map(words, function(word) {
  return word.toUpperCase();
});

// console.log(wordUpper)

map(words, function(word) {
  return word.split('').reverse().join('');
});

