var _ = require('lodash');
var rows = _.range(0, 6);
var cols = _.range(0, 7);

function getMatrix (y, m) {
  var matrix = [];
  var date = new Date(y, m);
  var numDays = new Date(y, m + 1, 0).getDate();
  var dayNum;

  _.each(rows, function (row) {
    var week = [];

    _.each(cols, function (col) {
      if (row == 0) {
        dayNum = col - date.getDay() + 1;
        week.push(col < date.getDay() ? -(new Date(y, m, -(date.getDay() - 1 - col)).getDate()) : dayNum);
      } else {
        dayNum = _.last(matrix)[6] + col + 1;
        week.push(dayNum <= numDays ? dayNum : -(dayNum - numDays));
      }
    });

    if (!row || week[0] > 1) matrix.push(week);

  });

  return matrix;
}

module.exports = function(year, month) {
  if (typeof year === 'undefined') year = new Date();

  if (year instanceof Date) {
    return getMatrix(year.getFullYear(), year.getMonth());
  } else {
    return getMatrix(year, month);
  }
};
