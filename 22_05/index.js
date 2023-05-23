// ============= numbers, number methods=========

// let bigNumber = 100000000; //this hard to read

// let bigNumber = 100_000_000;
// console.log(bigNumber + bigNumber);

// let numMillion = 1e6; // this is short way to mean long number like million or billion
// we have to put singular number first and put "e" this is zero, and amount of zero
// console.log(numMillion);

// console.log(0.2 + 0.2 == .4);

// tofixed--------------

// console.log(+Number(0.1+0.2).toFixed(1));

// how to do arifmetik aperation inside string with eval method

// let num = "0.1 + 0.2";

// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(eval(num)); //!!!!!

// console.log(eval("1_000") + 1);

// how to convert number to string ===========########========

// let num = 1995;

// console.log(num.toString());

//  MATH method ====================================

// console.log(Math.PI);

// abs absolute -------------------------
// console.log(Math.abs(10)); // always absolute value
// console.log(Math.abs(-10)); // always absolute value
// console.log(Math.abs(10.1)); // always absolute value
// round method --------------------
// console.log(Math.round(10.4)); // output 10
// console.log(Math.round(10.5)); // output 11
// console.log(Math.round(10.6)); // output 11

// floor method ----------------

// console.log(Math.floor(10.9)); //output 10

// ceil method -------------------

// console.log(Math.ceil(10.1)); //output 11
// console.log(Math.ceil(10.7)); //output 11

// trunc method --------------------------

// console.log(Math.floor(-10.9)); //output 11
// console.log(Math.trunc(-10.9)); // output 10


// random method ---------------------

// console.log(Math.random()*100); // you can random between 10/100/1000 between any number chose automaticly

// console.log(Math.random()*100); // with fraction .34324
// console.log(Math.trunc(Math.random()*100)); // without fraction 1,2,3,4

// min & max methods--------------

// console.log(Math.min(23,11,43,12,5)); // output 5
// console.log(Math.max(23,11,43,12,5)); // output 43

// pow method---------

// console.log(Math.pow(2,4));// degre
// console.log(2 **4);// also degre without math

// sign method --------------

// console.log(Math.sign(0)); //output 0
// console.log(Math.sign(-0)); //output -0
// console.log(Math.sign(1)); //output 1
// console.log(Math.sign(123)); //output 1
// console.log(Math.sign(-1)); //output -1
