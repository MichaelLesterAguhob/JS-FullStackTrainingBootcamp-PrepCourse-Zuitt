console.log("I am functioning");

// var use in mathematical operators
let x = 1397;
let y = 7831;

// arithmetic operators -> addition - subtraction - multiplication - division
let sum = x + y;
console.log(sum);

let difference = x - y;
console.log(difference);

let product = x * y;
console.log(product);

let quotient = x / y;
console.log(quotient);

// Assignment Operator
let assignmentNumber = 8;

// addition assignment operator
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber)

// suctraction assignment operator
assignmentNumber -= 2;
console.log("Result of suctraction assignment operator: " + assignmentNumber)

// multiply assignment operator
assignmentNumber *= 2;
console.log("Result of multipication assignment operator: " + assignmentNumber)

// division assignment operator
assignmentNumber /= 2;
console.log("Result of division assignment operator: " + assignmentNumber)

/*
    the operations were done using mDAS rule
    3 * 4 = 12
    12 / 5 = 2.4
    1 + 2 = 3
    3 - 2.4 = .6
*/ 
let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of MDAS: " + mdas);

let pmdas = (1 + (2 - 3)) * 4 / 5;
console.log("Result of PMDAS: " + pmdas);

//Comparison Operators
//strict Equality/Inequality Operators

// strict Equality 
/* 
- checks whether the operands are equal/ have the same content
- check the data types of the operands
- JS is loosely typed language, the values of different data types can be stored in variable
- In combination with type COERCION, this sometimes creates problems within our code
- double equal == does not compare the datatypes that cause problems
*/
console.log("strict equality below");
console.log(1 === 1); //true - same data types and value
console.log(1 === 2); //false
console.log(1 === '1'); //false 1 is number and '1' is string
console.log(0 === false); // false 0 is number and false is boolean 
console.log('juan' === 'juan'); // true 
//console.log('juan' === juan); // error - juan is not declared

console.log("strict inequality below");
// strict inequality
/*
 - checks if the right operand is not eqaul / does not have the same content as the left operand
 - checks for data types as well
*/ 
console.log(1 !== 1); // F
console.log(1 !== 2); // T
console.log(1 !== '1'); // T
console.log(0 !== false);  // T
console.log('juan' !== 'juan'); // F
//console.log('juan' !== juan); 

// TYPE COERCION -  the way JS converts one data type into another
let numStr = "30";
console.log( 10 > numStr); // false - forced coercion to convert string into number
let str = 'twenty';
console.log("Result of str coercion: " + (55 > str));



let a = 55;
let b = 70;

// GT / GTE operators
let isGreaterThan = a > b;
console.log(isGreaterThan);

let isGreaterThanOrEqual = 70 >= b;
console.log(isGreaterThanOrEqual);

// LT / LTE operators
let isLessThan = a < b;
console.log(isGreaterThan);

let isLessThanOrEqual = 55 <= a;
console.log(isGreaterThanOrEqual);