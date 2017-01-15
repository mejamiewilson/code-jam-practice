/* Large File */
var fs = require('fs');

var flip = function(configuration) {
		if(configuration.indexOf('-') === -1) {
			//they're all flipped, just return a 0
			return 0;
		}
		if(configuration.indexOf('+') === -1) {
			//they're all upside down, just return a 1
			return 1;
		}
		//attempt 1, break into groups of +'s and -'s
		var pieces = configuration.split('');
		var groups = [[configuration[0]]];
		var lastPiece = configuration[0];
		pieces.shift();
		while(pieces.length > 0) {
			var piece = pieces.shift();
			if(piece === lastPiece) {
				groups[groups.length -1].push(piece);
			} else {
				groups.push([piece]);
			}
			lastPiece = piece;
		}
		//if the last group is a +, ignore that gruop
		if(groups[groups.length-1][0] === '+') {
			return groups.length - 1;
		} else {
			return groups.length;
		}
}

/* File Function */
var run = function(in_file, out_file) {

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var N = parseInt(file[0]);
	file = file.splice(1, file.length);

	/*  */
	for(var i = 0; i < N; i++) {
		var configuration = file[i];
		split_strings.push("Case #" + (i+1) + ": " + flip(configuration));
	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


run('./B-mini.in', './B-mini.out');
run('./B-small.in', './B-small.out');
run('./B-large.in', './B-large.out');
