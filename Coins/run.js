var fs = require('fs');
var bignum = require('bignum');
var bigint = require('big-integer');

/* File Function */
var run = function(C, N, J, file) {

	var start = getStart(N);
	var coins = [];

	var current = start;
	while(J !== coins.length) {
		var result = getResult(current);
		if(result !== false) {
			coins.push(result);
			process.stdout.write("+");
		}
		current = current + 2;
	}

	var write = [];

	write.push("Case #" + C + ":");
	coins.forEach(function(coin) {
		write.push(coin.number + ' ' + coin.proofs.join(' '));
	});

	fs.writeFileSync(file, write.join('\n'), {encoding: 'utf8'});

};
var getResult = function(n) {
	var proofs = baseToProof(n);
	if(proofs === false) {
		return false;
	}
	return {
		number: (n).toString(2),
		proofs: proofs
	}
};

var getStart = function(N) {
	var zeros = N - 2;
	var start = "1";
	for(var i = 0; i < zeros; i++) {
		start = start + "0";
	}
	start = start + "1";
	return parseInt(start, 2);
};

var baseToProof = function(x) {
	var proofs = [];
	var ww = x.toString(2);
	var fail = false;
	for(var i = 2; i <= 10; i++) {
		var c = bigint(ww, i);
		var divisor = null;
		if(i === 10) {
			divisor = getLargeDivisor(c);
		} else {
			divisor = getDivisor(c.toString());
		}
		if(divisor === false) {
			fail = true;
			break;
		} else {
			proofs.push(divisor);
		}
	}
	if(!fail) { return proofs; }
	return false;
}
var getDivisor = function(full) {
	var split = full.split('');
	var last = parseInt(split[split.length-1]);
	if(last % 2 === 0) {
		return 2;
	}
	if(last % 5 === 0) {
		return 5;
	}
	// var _three = parseInt(threes(full));
	// if(_three % 3 === 0) {
	// 	return _three;
	// }
	return false;
}
var getLargeDivisor = function(n) {
	var result = 0;
	var int = 3;
	while(result === 0) {
		if(n.mod(int).eq(0)) {
			result = int;
		}
		int++;
	}
	return result;
}
// var threes = function(num) {
// 	var number = num + "";
// 	var total = 0;
// 	number.split('').forEach(function(i) {
// 		total += parseInt(i);
// 	});
// 	var totalString = total + "";
// 	if(totalString.length !== 1) {
// 		return threes(totalString);
// 	}
// 	return totalString;
// }


//run(1, 6, 3, 'C-mini.out');
// run(1, 16, 50, 'C-small.out2');
run(1, 32, 500, 'C-large2.out');
