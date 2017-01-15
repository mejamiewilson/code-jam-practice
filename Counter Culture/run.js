/* Large File */
var fs = require('fs');

var main = function(N) {
  if(N < 10) {
    return N;
  }
  //start
  var r = 10;
  //get 10s
  var l = Math.floor((N-10) / 10); //
  r += l * 3;

  //console.log(l, l*3  );
  //get remainer
  r += ((N - 10) % 10) - l;
  console.log(r);
  return r;
}

/* File Function */
var run = function(in_file, out_file) {

	var file = fs.readFileSync(in_file, {encoding: 'utf8'});
	file = file.split('\n');
	var testLength = parseInt(file[0]);
	file = file.splice(1, file.length);
	var n = 1;
  var split_strings = [];
	while (n <= testLength) {
		var N = parseInt(file[n-1]);
		split_strings.push("Case #" + n + ': ' + main(N));
		n++;
	}

	fs.writeFileSync(out_file, split_strings.join('\n'), 'utf8');


}

run('./mini.in', './mini.out');
//run('./b-large.in', './b-large.out');
