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

  left.forEach((leftValue) => {
    var similar = 0;
    right.map((rightValue) => {
      if(rightValue === leftValue) {
        similar++;
      }
    });
    if(similar > 0) {
      total += leftValue * similar;
    }
  });

 console.log(total);
});