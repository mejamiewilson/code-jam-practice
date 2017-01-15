var fs = require('fs');
var file = fs.readFileSync('./C-large2.out', {encoding: 'utf8'});
var bigint = require('big-integer');
file = file.split('\n');
file.shift();
var passes = 0;
var fails = 0;

file.forEach(function(line) {

  var pieces = line.split(' ');
  var pass = true;
  var numbers = pieces.map(function(n) {
    return parseInt(n);
  });

  //must be 32 length
  if(pieces[0].length !== 32) {
    pass = false;
  }
  //must start with a 1
  if(pieces[0][0] !== '1') {
    pass = false;
  }
  //must end with a 1
  if(pieces[0][pieces[0].length-1] !== '1') {
    pass = false;
  }
  //must have 10 divisors
  if(pieces.length !== 10) {
    pass = false;
  }
  //must be divisor of base 2
  for(var i = 2; i <= 9; i++) {
    var base = bigint(pieces[0], i-1).toString();
    var base_last = base[base.length-1];
    if(parseInt(base_last) % 2 === 0 || parseInt(base_last) % 5 === 0) {
    } else {
      pass = false;
    }
  }
  //last must be divisible
  if(!bigint(pieces[0], 10).mod(pieces[9]).eq(0)) {
    pass = false;
  }

  if(pass) { passes++; } else { fails++; }

});

console.log("Passes: " + passes);
console.log("Fails: " + fails);
