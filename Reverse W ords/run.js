/* Large File */
var fs = require('fs');

/* File Function */
var run = function(in_file, out_file) { 

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var testLength = parseInt(file[0]);
	file = file.splice(1, file.length);
	
	var split_strings = [];
	var n = 1;
	while (n <= testLength) {
		if(file[n-1] !== '') {
			var w = file[n-1].split(' '),
				r = [];
			for(var i = 0; i < w.length; i++) {
				r.push(w[w.length - (i+1)]);
			}
			split_strings.push("Case #" + n + ': ' + r.join(' '));
		}
		n++;
	}
	
	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');


}

run('./b-small.in', './b-small.out');
run('./b-large.in', './b-large.out');