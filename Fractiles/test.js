var _ = require('lodash');

var possible_strings = function(maxLength, alphabet, curr, possibilities) {
  if(curr.length === maxLength) {
    possibilities.push(curr);
  } else {
    for(var i = 0; i < alphabet.length; i++) {
      var oldCurrent = curr;
      curr += alphabet[i];
      possible_strings(maxLength, alphabet, curr, possibilities);
      curr = oldCurrent;
    }
  }
};


var draw_complexity = function(base, C) {
  var patterns = [[base]];
  for(var i = 0; i < C; i++) {
    var new_pattern = [];
    var last_pattern = patterns[patterns.length - 1];
    for(var x = 0; x < base.length; x++) {
      new_pattern.push(convert(last_pattern, base[x]));
    }
    patterns.push(new_pattern);
  }
  return patterns;
};

var convert = function(pattern, base) {
  var flat = _.flattenDeep(pattern).join('');
  if(base === 'G') {
    var _f = [];
    for(var i = 0; i < flat.length; i++) {
      _f.push('G');
    }
    return _f.join('');
  } else {
    return flat;
  }
}

//module.export = function(K, C) {
var getComparisons = function(list) {
  list = list.map(function(l) {
    return l.join('');
  });
  var results = [];
  for(var i = 0; i < list.length; i++) {
    var matches = [];
    for(var x = 0; x < list[i].length; x++) {
      var char = list[i][x];
      if(char === 'G') {
        matches.push(x);
      }
    }
    results.push(matches);
  }
  console.log(JSON.stringify(_.intersection.apply(this, results)));
  return list.length;
};

var K = 4;
var C = 5;
var possibilities = [];
var alphabet = ["L", "G"];
possible_strings(K, alphabet, "", possibilities);
var results = possibilities.map(function(p) {
  return draw_complexity(p, C);
});

var listsToTest = []; //get last element of each result
for(var i = 0; i < results.length; i++) {
  listsToTest.push(results[i][results[i].length-1]);
}
console.log(getComparisons(listsToTest));

//}
