/* Large File */
var fs = require('fs');

var run = function(B, N, M) {

  var barbers = [];
  var slots = [];
  var similar = true;
  for(var i = 0; i < B; i++) {
    barbers.push(M[i]);
    slots.push(0);
  }

  /* Cuts per phase */
  var phase = 0;

  if(equalArray(M)) {
    phase = M.length;
  } else {
    var _l = lcm(M);
    for(var i = 0; i < B; i++) {
      phase += _l / M[i];
    }
  }

  /* Get Remainder */
  N = N % phase;

  if(N === 0) {
      //the last slot will Cut
      N = phase;
  }

  var last_shortest = 0;

  for(var i = 0; i < N; i++){
    var shortest = getShortest(slots);
    slots[shortest] += barbers[shortest];
    last_shortest = shortest;
  }

  return[last_shortest + 1];

}

var equalArray = function(arr) {
  var x = arr[0];
  for(var i = 0; i < arr.length; i++) {
    if(x !== arr[i]) {
      return false;
    }
  }
  return true;
}

var getShortest = function(arr) {
  /* get shortest element in array */
  var short = arr[0];
  var index = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < short) {
      index = i;
      short = arr[i];
    }
  }
  return index;
}

function lcm(arr) {

  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  var multiple = arr[0];
  arr.forEach(function(n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}



var main = function(in_file, out_file) {

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var C = parseInt(file[0]);
	file = file.splice(1, file.length);

	/*  */
	for(var i = 0; i < C; i++) {
    var L = file[i * 2].split(' ').map(function(num) {
      return parseInt(num);
    });
    var B = L[0];
    var N = L[1];
    //console.log(file[(i * 2)], 'f', i);
    var M = file[i * 2 + 1].split(' ').map(function(num) {
      return parseInt(num);
    });
		split_strings.push("Case #" + (i+1) + ": " + run(B, N, M).join(' '));
    process.stdout.write('+');
	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


// main('./mini.in', './mini.out');
// main('./small.in', './small.out');
main('./large.in', './large.out');
