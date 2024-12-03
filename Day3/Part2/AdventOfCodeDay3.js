const fs = require('node:fs');

fs.readFile('Day3Input.txt', 'utf8', (err, data) => {
  var total = 0;
  var canMultiply = true;
  const result = data.match(/(do\(\))|(don't\(\))|(mul\(([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\,([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\))/gm).toString();

  const numbersToMultiply = result.match(/(do\(\))|(don't\(\))|([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\,([0-9]|[1-9][0-9]|[1-9][0-9][0-9])\)/gm);

  numbersToMultiply.forEach((element) => {
    if (element === 'do()') {
      canMultiply = true;
      return;
    }
    else if (element === "don't()") {
      canMultiply = false;
      return;
    }

    if (canMultiply) {
      const numbers = element.split(',');
      total += parseInt(numbers[0]) * parseInt(numbers[1]);
    }
  });

  console.log(total);
});