"use strict";

const { join, indexOf } = require('lodash');

const runFizzBuzzer = function (start, end) {
  if (!(!!start)) throw 'Start value is not valid.';

  if (!(!!end)) throw 'End value is not valid.';

  if (start > end) throw 'Starting value cannot be greater than end value.';

  const result = [];
  for (let cursor = start; cursor <= end; cursor++) {
    if (indexOf(cursor.toString(), '3') > -1) {
      result.push('lucky');
    }
    else if (cursor % 15 === 0) {
      result.push('fizzbuzz');
    }
    else if (cursor % 3 === 0) {
      result.push('fizz');
    }
    else if (cursor % 5 === 0) {
      result.push('buzz');
    }
    else {
      result.push(cursor.toString());
    }
  }

  return join(result, ' ');
}

module.exports = { runFizzBuzzer };