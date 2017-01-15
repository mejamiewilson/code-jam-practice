/* Large File */
var fs = require('fs');
var draw = require('./test.js');

var test = function(I, K, C, S) {

console.log(draw);
	var results = draw(K, C);


	// var choices = [];
	//
	// if(K === S) {
	// 	//as many original tiles as there are choices
	// 	for(var i = 0; i < K; i++) {
	// 		choices.push(i+1);
	// 	}
	// 	return choices.join(' ');
	// }
	//
	// if(K * C <= S) {
	// 	//as many final tiles as there are choices
	// 	for(var i = 0; i < K * C; i++) {
	// 		choices.push(i+1);
	// 	}
	// 	return choices.join(' ');
	// }
	//
	// var groupSize = K * (C - 1);
	// var totalInLastRow = Math.pow(K, C);
	// var numberOfGroups = totalInLastRow / groupSize;
	//
	// if(totalInLastRow / groupSize === Infinity) {
	// 	return "IMPOSSIBLE";
	// }
	//
	// if(S === 1) {
	// 	choices.push(C * K);
	// } else {
	// 	choices.push(C);
	// 	choices.push(C * K);
	// }
	//
	// return choices.join(' ');

}

/* File Function */
var run = function(in_file, out_file) {

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var N = parseInt(file[0]);
	file = file.splice(1, file.length);

	N = 1;

	/*  */
	for(var i = 0; i < N; i++) {
		var x = file[i];
		var result = test(i, parseInt(x.split(' ')[0]), parseInt(x.split(' ')[1]), parseInt(x.split(' ')[2]));
		split_strings.push("Case #" + (i+1) + ": " + result);
	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


//run('./D-mini.in', './D-mini.out');
//run('./D-small.in', './D-small.out');
run('./D-large.in', './D-large.out');
