var runs = 0;

var linear = function(guess) {
  var min = 1;
  var max = guess;
  for(var i = min; i <= guess; i++) {
    runs++;
    if(i===guess) {
      return;
    }
  }
};

linear(82);
linear(83);
linear(12);
console.log("Total Runs (linear): ", runs);

runs = 0;

var binary = function(guess) {
  var min = 1;
  var max = 100;
  if(min === guess) {
    return min;
  }
  while(min !== guess) {
    runs++;
    var mid = Math.floor((min + max) / 2);
    if(mid > guess) {
      max = mid;
    } else {
      min = mid;
    }
  }

};

binary(82);
binary(83);
binary(12);
console.log("Total Runs (binary): ", runs);

runs = 0;
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var prime = function(N) {
  var min = 0;
  var max = primes.length - 1;
  while(primes[min] !== N) {
    runs++;
    var mid = Math.floor((min + max) / 2);
    if(mid > N) {
      max = mid;
    } else {
      min = mid;
    }
  }
  return min;
};
console.log("Position", prime(67), runs);
