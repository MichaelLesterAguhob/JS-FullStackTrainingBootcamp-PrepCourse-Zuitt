function createSection() {
  console.log("============");
}

// if statement
// else if statement

console.log("====== mini activity ======");
// mini activity
let numC = 7;
if (numC < 0) {
  console.log("numC is less than zero");
} 
else if (numC > 0) {
  console.log("numC is greater than zero");
} 
else if (numC == 0) {
  console.log("numC is equal zero");
} 
else {
  console.log("numC is Not a Number");
}
createSection();

function determinWaterLevel(waterLevel) {
    if (waterLevel === 0) {
        return 'Water level is safe'
    }
    else if (waterLevel <= 2) {
        return 'Water level is rising. Proceed with caution';
    }
    else if (waterLevel > 2 && waterLevel <= 4) {
        return 'Water level is critical. Stay inside your homes and keep dry';
    }
    else if (waterLevel > 4 || waterLevel <= 6) {
        return 'Water level is deadly. contact your LGU for assistance';
    }
    else {
        return 'Water level is immeasurable. Evacuate immediately';
    }
}
console.log(determinWaterLevel(5));

/* 
Truthy and Falsy
 - if the result if an expression in a condition results to a truthy value, the condition returns true and the corresponding statements are executed
*/
if(true) {
    console.log('Truthy');
}
if(1) {
    console.log('Truthy');
}
if([]) {
    console.log('Truthy');
}

// Falsy
if(false) {
    console.log('Falsy');
}
if(0) {
    console.log('Falsy');
}
if(undefined) {  //NaN and null are also falsy 
console.log('Falsy');
}

// TERNARY OPERATOR
/* 
    Three Operands 
    - Condition
    - Expression to execute if the condition is true
    - Expression to execute if the condition is false
    - Has implicit return statement; without "return" keyword, the resulting expressions can be stored in a variable
*/
console.log((10 < 15) ? true : false);

// data types received from prompt () are always string
// let iq = parseInt(prompt("What is your IQ"));
// console.log(iq);
// let iqMesssage = (iq > 140) ? console.log('Genius') : console.log('Normal');


