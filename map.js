var words = ["ground", "control", "to", "major", "tom"];
var array = [];


function map(array, transform) {
  let mapped = [];
  for (let map of words) {
    mapped.push(transform(map));
  
}

map(words, function(word) {
  return word.length;
});

// console.log(wordLength)

map(words, function(word) {
  return word.toUpperCase();
});

// console.log(wordUpper)

map(words, function(word) {
  return word.split('').reverse().join('');
});


  return mapped;
}
map()



words.map()