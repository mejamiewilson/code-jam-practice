var testCases = [];

while(contentLines.length > 0) {
  var trees = [];
  var count = parseInt(contentLines.shift());
  for (var x = 0; x < count; x++) {
    trees.push(parseInt(contentLines.shift()));
  }
  if(trees.length !== 0) {
    testCases.push(trees);
  }
}
