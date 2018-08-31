var makeLoadedDie = function() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var startingPoint = 0

  return function() {
  	var cheater = list[startingPoint]
  	startingPoint += 1
    return cheater;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6






