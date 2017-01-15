/* Large File */
var fs = require('fs');

var run = function(C, L) {
  var L1 = L.slice();
  var L2 = L.slice();
  var L3 = L.slice();
  return [method1(C, L1), method2(C, L2, L3)];
}

var method1 = function(C, L) {
  var base = L[0];
  var eaten = 0;
  L.shift();
  L.forEach(function(l) {
    if(l > base) {
    } else if (l <= base) {
      eaten = eaten + (base-l);
    }
    base = l;
  });
  return eaten;
}

var method2 = function(C, L, F) {
  var base1 = L[0];
  var base2 = 0;
  L.shift();
  var speed = 0;
  //determine speed
  L.forEach(function(l) {
    if(base1-l > speed) {
      speed = base1-l;
    }
    base1 = l;
  });

  if(speed === 0) {
    return 0;
  }

  var eaten = 0;
  F.pop();
  F.forEach(function(f) {
    eaten += get(f, speed);
  })
  return eaten;
  
}

var get = function(amt, speed) {
  if(amt > speed) {
    return speed;
  } else {
    return amt;
  }
};


/* File Function */
var main = function(in_file, out_file) {

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var N = parseInt(file[0]);
	file = file.splice(1, file.length);

	/*  */
	for(var i = 0; i < N; i++) {
    var C = parseInt(file[(i * 2)]);
    var L = file[(i * 2) + 1].split(' ').map(function(num) {
      return parseInt(num);
    });
		split_strings.push("Case #" + (i+1) + ": " + run(C, L).join(' '));
	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


main('./large.in', './large.out');
