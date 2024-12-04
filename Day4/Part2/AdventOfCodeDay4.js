const fs = require('node:fs');

var totalXmas = 0;


fs.readFile('Day4Input.txt', 'utf8', (err, data) => {
  const matrix = [];
  data.split('\n').forEach((line, index) => {
    matrix.push(line.split(''));
  });

  matrix.forEach((line, matrixIndex) => {
    line.forEach((char, index) => {

      if (char === 'A') {

        if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index + 1] === 'S')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index - 1] === 'M')
          && (matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index - 1] === 'M')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index + 1] === 'S')) {
          totalXmas++;
        }
        else if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index + 1] === 'M')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index - 1] === 'S')
          && (matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index - 1] === 'M')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index + 1] === 'S')) {
          totalXmas++;
        }
        else if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index + 1] === 'M')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index - 1] === 'S')
          && (matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index - 1] === 'S')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index + 1] === 'M')) {
          totalXmas++;	
        }
        else if ((matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index + 1] === 'S')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index - 1] === 'M')
          && (matrix[matrixIndex + 1] != undefined && matrix[matrixIndex + 1][index - 1] === 'S')
          && (matrix[matrixIndex - 1] != undefined && matrix[matrixIndex - 1][index + 1] === 'M')) {
          totalXmas++;
        }
      }
    });
  });
  console.log('totalXmas', totalXmas);
});