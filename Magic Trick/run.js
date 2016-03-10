/* Large File */
var fs = require('fs');

/* File Function */
var run = function(in_file, out_file) { 

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var N = parseInt(file[0]);
	file = file.splice(1, file.length);

	for(var i = 0; i < N; i++) {
		
		var choice1 = parseInt(file[(i * 10) + 0]),
			choice2 = parseInt(file[(i * 10) + 5]),
			row1 = file[(i * 10) + choice1]
				.split(' ')
				.map(function(i) { return parseInt(i); }),
			row2 = file[(i * 10) + 5 + choice2]
				.split(' ')
				.map(function(i) { return parseInt(i); }),
			matches = [];

		for(var x = 0; x < row1.length; x++) {
			if(row2.indexOf(row1[x]) !== -1) {
				matches.push(row1[x]);
			}
		}

		var message = null;
		if(matches.length === 1) {
			message = matches[0];
		} else if (matches.length === 0) {
			message = "Volunteer cheated!";
		} else if (matches.length > 1) {
			message = "Bad magician!";
		}

		split_strings.push("Case #" + (i+1) + ": " + message);


	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


run('./A-small-practice.in', './A-small-practice.out');