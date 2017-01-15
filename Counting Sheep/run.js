/* Large File */
var fs = require('fs');

var sleep = function(x) {
		if(x === 0) {
			return "INSOMNIA";
		}
		var numbersToEliminate = [0,1,2,3,4,5,6,7,8,9];
		var y = 1;
		var latestTotal = 0;
		while(numbersToEliminate.length > 0) {
			latestTotal = (y * x);
			var totalString = latestTotal + "";
			var keys = totalString.split('');
			keys.forEach(function(key) {
				if(numbersToEliminate.indexOf(parseInt(key)) !== -1) {
					numbersToEliminate.splice(numbersToEliminate.indexOf(parseInt(key)), 1);
				}
			});
			y++;
		}
		return latestTotal;
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
		var x = parseInt(file[i]);
		split_strings.push("Case #" + (i+1) + ": " + sleep(x));
	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}


//run('./A-mini-practice.in', './A-mini-practice.out');
//run('./A-small-practice.in', './A-small-practice.out');
run('./A-large-practice.in', './A-large-practice.out');
