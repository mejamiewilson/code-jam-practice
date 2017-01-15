'use strict';
var contentLines = require('fs').readFileSync(process.argv[2],'utf-8').split('\n'),
    T = parseInt(contentLines[0],10);

//Kill first line now that we have T
contentLines.shift();

var testCases = [];

while(contentLines.length > 0) {
  var trees = [];
  var count = parseInt(contentLines.shift());
  for (var x = 0; x < count; x++) {
    trees.push(contentLines.shift().split(' ').map(function(t) { return parseInt(t); }));
  }
  if(trees.length !== 0) {
    testCases.push(trees);
  }
}


for (var t = 0; t < testCases.length; t++) {

    var result = 'Case #'+(t+1)+': ';
    result += JSON.stringify(testCases[t]);

    console.log(result);

}
