'use strict';
module.exports = function randomNum() {
  const rand = Math.floor((Math.random()*1000000));
  console.log('  rand  outer ' +  rand);
  return function() {
    console.log('  rand inner ' + rand);
    return rand;
  }
};

// WHAT EACH FUNCTION CALL DOES

// const myNum = randomNum() sets all numbers to a new number
// randomNum() is rand outer & shows a different number than the set number
// myNum() is rand inner & shows the same number as the set number


//========================================================================================================== 


// CALL FUNCTIONS WITHOUT CONSOLE.LOGs TO SEE CLEARER WHAT IS CALLED

      // call function and set it to myNum

// const myNum = randomNum();     // number set to myNum

// myNum();                       // myNum stays constantly the same 

// randomNum();                   // rand outer changed but rand inner still the same

// myNum();                       // rand inner still the same 

      // call function and set it to myNum2

// const myNum2 = randomNum();    // all numbers reset to a new number

// myNum2();                      // constant

// randomNum();                   // rand outer random but rand inner same

// myNum2();                      // rand inner same      

// myNum();     // wanted to see if it kept the same number from first function calling set  
                // it did, see console.log results below


//===========================================================================================================


// CONSOLE.LOG TO SEE WHAT IT LOOKS LIKE

// console.log('  randomNum  ', randomNum);
// console.log('  myNum  ', myNum);
// console.log('  myNum2  ', myNum2);


//==========================================================================================================


// CALL FUNCTIONS WITH CONSOLE.LOGs

// call function and set it to myNum
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


//===========================================================================================================


// EXAMPLE OF THE CONSOLE.LOGs results 

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