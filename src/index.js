"use strict";

const { join, indexOf } = require('lodash');

const runFizzBuzzer = function (start, end) {
  if (!(!!start)) throw 'Start value is not valid.';

  if (!(!!end)) throw 'End value is not valid.';

  if (start > end) throw 'Starting value cannot be greater than end value.';

  const report = {
    fizzCount: 0,
    buzzCount: 0,
    fizzBuzzCount: 0,
    luckyCount: 0,
    integerCount: 0
  }

  const result = [];
  for (let cursor = start; cursor <= end; cursor++) {
    if (indexOf(cursor.toString(), '3') > -1) {
      report.luckyCount++;
      result.push('lucky');
    }
    else if (cursor % 15 === 0) {
      report.fizzBuzzCount++;
      result.push('fizzbuzz');
    }
    else if (cursor % 3 === 0) {
      report.fizzCount++;
      result.push('fizz');
    }
    else if (cursor % 5 === 0) {
      report.buzzCount++;
      result.push('buzz');
    }
    else {
      report.integerCount++;
      result.push(cursor.toString());
    }
  }

  result.push('fizz: ' + report.fizzCount.toString());
  result.push('buzz: ' + report.buzzCount.toString());
  result.push('fizzbuzz: ' + report.fizzBuzzCount.toString());
  result.push('lucky: ' + report.luckyCount.toString());
  result.push('integer: ' + report.integerCount.toString());

  return join(result, ' ');
}

module.exports = { runFizzBuzzer };