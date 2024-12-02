const fs = require('node:fs');

var left = [];
var right = [];
var total = 0;

fs.readFile('Day1Inputs.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data.split(/\s+/).forEach((line, index) => {
    if(line === '') {
      return;
    }

    if (index % 2 === 0) {
      left.push(parseInt(line));
    }
    else {
      right.push(parseInt(line));
    }
  });

  left.sort();
  right.sort();

  for(var i = 0; i < left.length; i++) {
    total += Math.abs(left[i] - right[i]);
  }

 console.log(total);
});