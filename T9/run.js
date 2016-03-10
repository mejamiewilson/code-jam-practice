/* Large File */
var fs = require('fs');

var matching = {
	a: '2',
	b: '22',
	c: '222',
	d: '3',
	e: '33',
	f: '333',
	g: '4',
	h: '44',
	i: '444',
	j: '5',
	k: '55',
	l: '555',
	m: '6',
	n: '66',
	o: '666',
	p: '7',
	q: '77',
	r: '777',
	s: '7777',
	t: '8',
	u: '88',
	v: '888',
	w: '9',
	x: '99',
	y: '999',
	z: '9999'
};

/* File Function */
var run = function(in_file, out_file) { 

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var split_strings = [];

	/* line 1 is number of test cases */
	var N = parseInt(file[0]);
	file = file.splice(1, file.length);

	for(var i = 0; i < N; i++) {
		var line = file[i];
		var chars = line.split('');
		var keys = [],
			result = [];
		for(var x = 0; x < chars.length; x++) {
			if(chars[x] === ' ') {
				keys.push('0');
			} else {
				keys.push(matching[chars[x]]);
			}
		}
		for(var x = 0; x < keys.length; x++) {
			if(x!==0) {
				if(keys[x][0] === result[result.length-1].slice(-1)) {
					result.push(' '+ keys[x]);
				} else {
					result.push(keys[x]);
				}
			} else {
				result.push(keys[x]);
			}
		}
		split_strings.push("Case #" + (i+1) + ": " + result.join(''));
	}
	
	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');

}

run('./C-small-practice.in', './C-small-practice.out');
run('./C-large-practice.in', './C-large-practice.out');