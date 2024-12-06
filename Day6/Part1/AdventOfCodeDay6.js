const fs = require('node:fs');

const directions = {
  'up': 0,
  'right': 1,
  'down': 2,
  'left': 3
}
var currentDirection = directions.up;

var currentPosition = []; // [x, y] = line and column

var totalMoves = 1;

var end = false;

var visitedLocations = [];

function getNextPosition(currentPosition, direction) {
  switch (direction) {
    case directions.up:
      return [currentPosition[0] - 1, currentPosition[1]];
    case directions.right:
      return [currentPosition[0], currentPosition[1] + 1];
    case directions.down:
      return [currentPosition[0] + 1, currentPosition[1]];
    case directions.left:
      return [currentPosition[0], currentPosition[1] - 1];
  }
}

fs.readFile('Day6Input.txt', 'utf8', (err, data) => {
  const matrix = [];
  data.split('\n').forEach((line, index) => {
    matrix.push(line.split(''));
  });

  matrix.map((line, index) => {
    if (line.indexOf('^') != -1)
      currentPosition.push(index, line.indexOf('^'))
  });

  do {
    var nextPosition = getNextPosition(currentPosition, currentDirection);

    var path = matrix[nextPosition[0]] != undefined && matrix[nextPosition[0]][nextPosition[1]] != undefined ? matrix[nextPosition[0]][nextPosition[1]] : 'end';

    if (path == '.' || path == '^') {
      currentPosition = nextPosition;
      if (visitedLocations.find((location) => location[0] == currentPosition[0] && location[1] == currentPosition[1]) == undefined) {
        visitedLocations.push([currentPosition[0], currentPosition[1]]);
        totalMoves++;
      }
    }
    else if (path == '#') {
      currentDirection = (currentDirection + 1) % 4;
    }
    else {
      end = true;
    }
  }
  while (end == false);

  console.log('total', totalMoves);

});