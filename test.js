var test = require('tape');
var sinon = require('sinon');
var matrix = require('./');

var dec14 = [
  [-30, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, -1, -2, -3]
];

var jan15 = [
  [-28, -29, -30, -31, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31]
];

test('Accepts a year and a month', function (t) {
  t.equal(matrix(2015, 0).toString(), jan15.toString());
  t.end();
});

test('Accepts a Date instance', function (t) {
  t.equal(matrix(new Date(2014, 11)).toString(), dec14.toString());
  t.end();
});

test('Uses current date if no args passed', function (t) {
  var clock = sinon.useFakeTimers(new Date(2015, 0).valueOf());

  t.equal(matrix().toString(), jan15.toString());
  t.end();

  clock.restore();
});
