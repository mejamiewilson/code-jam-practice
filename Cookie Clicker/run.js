/* Large File */
var fs = require('fs');

var cookie = function(set) {
	
	var seconds = 0;
	var rate = 2;

	//while hitting the total at the current rate is bigger than
	//a factory at the current rate + the total at the next rate

	while (set.X / rate > (set.C / rate) + (set.X/(rate + set.F))) {
		
		seconds += ( set.C / rate );
		rate += set.F;
		
	}
	seconds += set.X / rate;
	
	return seconds;

};

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
	for(var i = 0; i < file.length; i++) {
		var line = file[i].split(' ');
		sets.push({C: parseFloat(line[0]), F: parseFloat(line[1]), X: parseFloat(line[2])});
	}
	
	for(var i = 0; i < N; i++) {
		var set = sets[i];
		console.log(set);
		split_strings.push("Case #" + (i+1) + ": " + cookie(set));	
	}
	
	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


run('./B-mini-practice.in', './B-mini-practice.out');
run('./B-small-practice.in', './B-small-practice.out');
run('./B-large-practice.in', './B-large-practice.out');