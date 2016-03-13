/* Large File */
var fs = require('fs');

var minesweeper = function(set) {
	
	// set.W = width, 
	// set.H = height,
	// set.M = number of mines

	var result = [];
	var board = [];
	console.log(set);

	for(var i = 0; i < set.W * set.H; i++) {
		if (i > set.W * set.H - set.M - 1) {
			// set mines for the last set.M cells
			board.push('*');
		} else {
			// all others are .
			board.push('.');
		}
	}

	//fail if only 2 or 3 blanks
	//var blanks = (board.join('').match(/\./g) || []).length;

	// *****
	// Need to work out what counts as a fail
	// *****

	//Blanks can only be 0 - 8 inclusive, so anything with a lengh of 9
	//between 'c' and '*' must be a fail
	
	// Getting a success ready to print
	for(var i = 0; i < set.W; i++) {
		var r = board.slice(i * set.H, i * set.H + set.H).join('');
		if(!Array.isArray(r)) {
			r = [r];
		}
		result.push(r);
	}
	result[0] = 'c' + result[0].join('').substr(1);



	return result.join('\n');

};


/* File Function */
var run = function(in_file, out_file) { 

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var N = parseInt(file[0]);
	file = file.splice(1, file.length);

	var sets = [];
	for(var i = 0; i < N; i++) {
		var line = file[i].split(' ');
		sets.push({W: parseInt(line[0]), H: parseInt(line[1]), M: parseFloat(line[2])});
	}
	
	for(var i = 0; i < N; i++) {
		var set = sets[i];
		split_strings.push("Case #" + (i+1) + ": ");
		split_strings.push(minesweeper(set));	
	}
	
	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


run('./C-mini-practice.in', './C-mini-practice.out');
run('./C-small-practice.in', './C-small-practice.out');
run('./C-large-practice.in', './C-large-practice.out');