'use strict';
module.exports = function randomNum() {
  const rand = Math.floor((Math.random()*1000000));
  console.log('  rand  outer ' +  rand);
  return function() {
    console.log('  rand inner ' + rand);
    return rand;
  }
};

// const myNum = randomNum() sets all numbers to a new number
// randomNum() is the outer rand & shows a different number than the set number
// myNum() is the inner rand & shows the same number as the set number

// console.log('  randomNum 1  ');
// const myNum = randomNum();

// console.log('  myNum  a  ' + myNum());

// console.log('  randomNum  2  ');
// randomNum();

// console.log('  myNum  b  ' + myNum());


// console.log('  randomNum 3  ');
// const myNum2 = randomNum();

// console.log('  myNum2 a  ' + myNum2());

// console.log('  randomNum 4  ');
// randomNum();

// console.log('  myNum2 b  ' + myNum2());

// console.log('  myNum c  ' + myNum());

// console.log('  randomNum  ', randomNum);
// console.log('  myNum  ', myNum);
// console.log('  myNum2  ', myNum2);


// "  randomNum 1  "
// "  rand  outer 421019"
// "  rand inner 421019"
// "  myNum  a  421019"
// "  randomNum  2  "
// "  rand  outer 560906"
// "  rand inner 421019"
// "  myNum  b  421019"
// "  randomNum 3  "
// "  rand  outer 297414"
// "  rand inner 297414"
// "  myNum2 a  297414"
// "  randomNum 4  "
// "  rand  outer 743227"
// "  rand inner 297414"
// "  myNum2 b  297414"
// "  rand inner 421019"
// "  myNum c  421019"