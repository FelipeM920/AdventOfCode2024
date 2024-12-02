const fs = require('node:fs');

var reports = [];
var totalSafesReports = 0;

fs.readFile('Day2Inputs.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data.split('\n').forEach((line, index) => {
    var safeReport = true;
    reports = line.split(' ');

    if (parseInt(reports[0]) > parseInt(reports[1])) {
      for (var i = 0; i <= reports.length; i++) {
        if(parseInt(reports[i]) < parseInt(reports[i + 1]) || parseInt(reports[i]) === parseInt(reports[i + 1])) {
          safeReport = false;
          break;
        }

        var result = Math.abs(parseInt(reports[i]) - parseInt(reports[i + 1]));

        if (result > 3) {
          safeReport = false;
          break;
        }
      }
    }
    else {
      for (var i = 0; i < reports.length; i++) {
        console.log(parseInt(reports[i]) === parseInt(reports[i + 1]))

        if(parseInt(reports[i]) > parseInt(reports[i + 1]) || parseInt(reports[i]) === parseInt(reports[i + 1])) {
          safeReport = false;
          break;
        }

        var result = Math.abs(parseInt(reports[i]) - parseInt(reports[i + 1]));

        if (result > 3) {
          safeReport = false;
          break;
        }
      }
    }

    if(safeReport)
      totalSafesReports++;

  });
  console.log(totalSafesReports);
});