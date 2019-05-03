"use strict";

const { runFizzBuzzer } = require('./index');

describe('Equal Experts FizzBuzzer', () => {

  it('it returns the correct result for a single integer', () => {
    const series = runFizzBuzzer(1, 1);

    expect(series).toEqual('1');
  });

  it('it returns the correct result for a single value 3', () => {
    const series = runFizzBuzzer(3, 3);

    expect(series).toEqual('lucky');
  });

  it('it returns the correct result for a single value 13', () => {
    const series = runFizzBuzzer(13, 13);

    expect(series).toEqual('lucky');
  });

  it('it returns the correct result for a single value 5', () => {
    const series = runFizzBuzzer(5, 5);

    expect(series).toEqual('buzz');
  });

  it('it returns the correct result for a single value 15', () => {
    const series = runFizzBuzzer(15, 15);

    expect(series).toEqual('fizzbuzz');
  });

  it('it returns the correct result for a series of numbers between 1 and 20', () => {
    const series = runFizzBuzzer(1, 20);
    
    expect(series).toEqual('1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz');
  });

  it('it throws the expected exception if start value is missing or invalid', () => {
    const fizzBuzzWrapper = () => runFizzBuzzer(undefined, 1);
    
    expect(fizzBuzzWrapper).toThrowError(/Start value is not valid./ig)
  });

  it('it throws the expected exception if end value is missing or invalid', () => {
    const fizzBuzzWrapper = () => runFizzBuzzer(1, undefined);
    
    expect(fizzBuzzWrapper).toThrowError(/End value is not valid./ig)
  });

  it('it throws the expected exception if start value is higher than end value', () => {
    const fizzBuzzWrapper = () => runFizzBuzzer(10, 1);
    
    expect(fizzBuzzWrapper).toThrowError(/Starting value cannot be greater than end value./ig);
  });

});