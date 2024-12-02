const fs = require('node:fs');

var reports = [];
var totalSafesReports = 0;
var warnings = 0;
var warningArrayIndex = [];

var calculateA = (reports) => {
  for (var i = 0; i <= reports.length; i++) {

    var result = Math.abs(parseInt(reports[i]) - parseInt(reports[i + 1]));

    if (parseInt(reports[i]) < parseInt(reports[i + 1]) || parseInt(reports[i]) === parseInt(reports[i + 1]) || result > 3) {
      warningArrayIndex.push(i);
      warnings++;
    }
  }
}

var calculateB = (reports) => {
  for (var i = 0; i < reports.length; i++) {

    var result = Math.abs(parseInt(reports[i]) - parseInt(reports[i + 1]));

    if (parseInt(reports[i]) > parseInt(reports[i + 1]) || parseInt(reports[i]) === parseInt(reports[i + 1]) || result > 3) {
      warningArrayIndex.push(i);
      warnings++;
    }
  }
}

fs.readFile('Day2Inputs.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data.split('\n').forEach((line, index) => {
    var safeReport = true;
    reports = line.split(' ');
    warnings = 0;
    warningArrayIndex = [];

    if (parseInt(reports[0]) > parseInt(reports[1])) {

      calculateA(reports);
      if (warnings > 1)
        safeReport = false;

      if (warnings === 1 && warningArrayIndex + 2 <= reports.length - 1) {
        reports.splice(warningArrayIndex, 1);
        warnings = 0;
        calculateA(reports);
        if (warnings == 0)
          safeReport = true;
        else
          safeReport = false;
      }

      if (warnings === 1 && warningArrayIndex == reports.length - 1)
        safeReport = true;

      if (warnings === 2 && (warningArrayIndex[0] + 1) == warningArrayIndex[1]) {
        reports.splice(warningArrayIndex[1], 1);
        warnings = 0;
        calculateA(reports);
        if (warnings == 0)
          safeReport = true;
        else
          safeReport = false;
      }

      if (warnings === reports.length - 1) {
        reports.splice(0, 1);
        warnings = 0;
        calculateB(reports);
        if (warnings == 0)
          safeReport = true;
        else
          safeReport = false;
      }
    }
    else {
      calculateB(reports);

      if (warnings > 1)
        safeReport = false;
      if (warnings === 1 && warningArrayIndex[0] + 2 <= reports.length - 1) {

        reports.splice(warningArrayIndex[0], 1);
        warnings = 0;
        calculateB(reports);
        if (warnings == 0)
          safeReport = true;
        else
          safeReport = false;
      }

      if (warnings === 1 && warningArrayIndex[0] == reports.length - 1)
        safeReport = true;

      if (warnings === 2 && (warningArrayIndex[0] + 1) == warningArrayIndex[1]) {
        reports.splice(warningArrayIndex[1], 1);
        warnings = 0;
        calculateB(reports);
        if (warnings == 0)
          safeReport = true;
        else
          safeReport = false;
      }

      if(warnings === reports.length - 1) {
        reports.splice(0, 1);
        warnings = 0;
        calculateA(reports);
        if (warnings == 0)
          safeReport = true;
        else
          safeReport = false;
      }

    }

    if (safeReport)
      totalSafesReports++;

  });
  console.log(totalSafesReports);
});