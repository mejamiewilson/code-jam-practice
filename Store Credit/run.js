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

	/* each three lines after, C I P are a set */
	var sets = [];
	while(sets.length < N) {
		sets.push({C: file[0], I: file[1], P: file[2].split(' ')});
		file = file.splice(3, file.length);
	}
	
	for(var i = 0; i < sets.length; i++) {
		var set = sets[i];
		for(var x = 0; x < set.I; x++) {
			var m = test_array(x, set.P, set.I, set.C);
			if(m !== null) {
				split_strings.push('Case #' + (i+1) + ': ' + (x+1) + ' ' + (m+1));
			}
		}	
	}
	
	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}

var test_array = function(start, arr, len, match) {
	for(var i = start + 1; i < len; i++) {
		if(parseInt(arr[start]) + parseInt(arr[i]) === parseInt(match)) {
			return i;
		}
	}
	return null;
};

run('./A-small-practice.in', './A-small-practice.out');
run('./A-large-practice.in', './A-large-practice.out');