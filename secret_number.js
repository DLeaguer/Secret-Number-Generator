'use strict';
module.exports = function() {
  const rand = Math.floor(Math.random()*1000000);
  console.log('rand', rand);
  return function() {
    return rand;
  }
};


// randomNum() // different num

// const myNum = randomNum()
// myNum() //same num
// myNum()
// myNum()
// myNum()

// const myNum2 = randomNum()
// myNum2()
// myNum2()
// myNum2()
// myNum2()

// myNum()
