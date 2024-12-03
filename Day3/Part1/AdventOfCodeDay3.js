const fs = require('node:fs');

fs.readFile('Day3Input.txt', 'utf8', (err, data) => {
  var total = 0;
  const result = data.match(/mul\(([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\,([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\)/gm).toString();
  const numbersToMultiply = result.match(/([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\,([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\)/gm);

  numbersToMultiply.forEach((element) => {
    const numbers = element.split(',');
    total += parseInt(numbers[0]) * parseInt(numbers[1]);
  });

  console.log(total);
});