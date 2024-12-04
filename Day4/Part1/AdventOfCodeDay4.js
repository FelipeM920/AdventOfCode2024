const fs = require('node:fs');

var totalXmas = 0;

var leftToRight = 0;
var rightToLeft = 0;
var upToDown = 0;
var downToUp = 0;
var diagonal = 0;

fs.readFile('Day4Input.txt', 'utf8', (err, data) => {
  const matrix = [];
  data.split('\n').forEach((line, index) => {
    matrix.push(line.split(''));
  });

  matrix.forEach((line, matrixIndex) => {
    line.forEach((char, index) => {

      if (char === 'X') {
        //search left to right
        if (line[index + 1] === 'M' && line[index + 2] === 'A' && line[index + 3] === 'S') {
          leftToRight++;
          totalXmas++;
        }
        //search right to left
        if (line[index - 1] === 'M' && line[index - 2] === 'A' && line[index - 3] === 'S') {
          rightToLeft++;
          totalXmas++;
        }
        //search up to down
        if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index] === 'M')
          && (matrix[matrixIndex + 2] != undefined && matrix[matrixIndex + 2][index] === 'A')
          && (matrix[matrixIndex + 3] != undefined && matrix[matrixIndex + 3][index] === 'S')) {
          upToDown++;
          totalXmas++;
        }
        //search down to up
        if ((matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index] === 'M')
          && (matrix[matrixIndex - 2] != undefined && matrix[matrixIndex - 2][index] === 'A')
          && (matrix[matrixIndex - 3] != undefined && matrix[matrixIndex - 3][index] === 'S')) {
          downToUp++;
          totalXmas++;
        }
        //search diagonal up to down right
        if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index + 1] === 'M')
          && (matrix[matrixIndex + 2] != undefined && matrix[matrixIndex + 2][index + 2] === 'A')
          && (matrix[matrixIndex + 3] != undefined && matrix[matrixIndex + 3][index + 3] === 'S')) {
          diagonal++;
          totalXmas++;
        }
        //search diagonal up to down left
        if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index - 1] === 'M')
          && (matrix[matrixIndex + 2] != undefined && matrix[matrixIndex + 2][index - 2] === 'A')
          && (matrix[matrixIndex + 3] != undefined && matrix[matrixIndex + 3][index - 3] === 'S')) {
          diagonal++;
          totalXmas++;
        }
        //search diagonal down to up left
        if ((matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index - 1] === 'M')
          && (matrix[matrixIndex - 2] != undefined && matrix[matrixIndex - 2][index - 2] === 'A')
          && (matrix[matrixIndex - 3] != undefined && matrix[matrixIndex - 3][index - 3] === 'S')) {
          diagonal++;
          totalXmas++;
        }
        //search diagonal down to up right
        if ((matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index + 1] === 'M')
          && (matrix[matrixIndex - 2] != undefined && matrix[matrixIndex - 2][index + 2] === 'A')
          && (matrix[matrixIndex - 3] != undefined && matrix[matrixIndex - 3][index + 3] === 'S')) {
          diagonal++;
          totalXmas++;
        }
      }
    });
  });
  console.log('leftToRight', leftToRight);
  console.log('rightToLeft', rightToLeft);
  console.log('upToDown', upToDown);
  console.log('downToUp', downToUp);
  console.log('diagonal', diagonal);
  console.log('totalXmas', totalXmas);
});