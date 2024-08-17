console.log("S04 Activity");
console.log("=======================");
/* 1. In the S04 folder, create an activity folder, an index.html file inside of it and link the index.js file.

2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file. */



/*
3. Create a function called "getSum" which will be able to add two numbers.
    - Two Numbers must be provided as arguments.
    - Function should return the sum of the two numbers.

4. Create a new variable called "sum".
    - This "sum" variable should be able to receive and store the result of "getSum" function.
    - Log the value of "sum" variable in the console.
*/

function getSum(num1, num2)
{
    console.log("The Sum of " + num1 + " and " + num2 + " is:"); 
    return num1 + num2;
}
let sum = getSum(7, 23);
console.log(sum);



console.log("=======================");
/* 
5. Create a function called "getDifference" which will be able to subtract two numbers.
    - Two Numbers must be provided as arguments.
    - Function should return the difference of the two numbers.

6. Create a new variable called "difference".
    - This "difference" variable should be able to receive and store the result of "getDifference" function.
    - Log the value of "difference" variable in the console. 
*/
function getDifference(num1, num2)
{
    console.log("The Difference of " + num1 + " and " + num2 + " is:"); 
    return num1 - num2;
}
let difference = getDifference(23, 7);
console.log(difference);



console.log("=======================");
/*     
7. Create a function called "getProduct" which will be able to multiply two numbers.
    - Two Numbers must be provided as arguments.
    - function should return product of the two numbers.

8. Create a new variable called "product".
    - This "product" variable should be able to receive and store the result of "getProduct" function.
    - Log the value of "product" variable in the console. 
*/
function getProduct(num1, num2)
{
    console.log("The Product of " + num1 + " and " + num2 + " is:"); 
    return num1 * num2;
}
let product = getProduct(11, 3);
console.log(product);



console.log("=======================");
/* 
8. Create a function called "getQuotient" which will be able to divide two numbers.
    - Two Numbers must be provided as arguments.
    - function should return quotient of the two numbers.

9. Create a new variable called quotient.
    - This "quotient" variable should be able to receive and store the result of "getQuotient" function.
    - Log the value of "quotient" variable in the console.
 */
function getQuotient(num1, num2)
{
    console.log("The Quotient of " + num1 + " and " + num2 + " is:"); 
    return num1 / num2;
}
let quotient = getQuotient(21, 7);
console.log(quotient);



console.log("=======================");
/* 
10. Create a function called "getSquarePerimeter" which will be able to get total perimeter of a square from a provided "sideLength".
    - A number should be provided as an argument.
    - Look up the formula for calculating the perimeter of a square with a provided/given side length.
    - Return the result of the perimeter calculation.
    
11. Create a new variable called "squarePerimeter".
    - This variable should be able to receive and store the result of the "getSquarePerimeter" function.
    - Log the value of the "squarePerimeter" variable in the console.
*/
function getSquarePerimeter(sideLength)
{
    console.log("The Perimeter of Square with " + sideLength + " length on each side is:"); 
    return 4 * sideLength;
}
let squarePerimeter = getSquarePerimeter(40);
console.log(squarePerimeter);



console.log("=======================");
/* 
12. Create a function "getStudentAverage" which will be able to get total average of four numbers.
    - Four numbers should be provided as an argument.
    - Look up the formula for calculating the average of numbers.
    - Return the result of the average calculation.

13. Create a new variable called "averageScore".
    - This variable should be able to receive and store the result of the "getStudentAverage" function.
    - Log the value of the "averageScore" variable in the console.
 */
function getStudentAverage(num1, num2, num3, num4)
{
    console.log("The Average of " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + " is:"); 
    return (num1 + num2 + num3 + num4) / 4;
}
let averageScore = getStudentAverage(92, 89, 90, 87);
console.log(averageScore);




console.log("=======================");
/*     
14. Create a function called "checkPassingScore" which will be able to check if the student score passed by checking the percentage of the score against the passing percentage.
    - This function should take two numbers as an argument, your score and the total score.
    - First, get the percentage of your score against the total. You can look up the - formula to get percentage.
    - Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called "isScorePassing".
    - Return the value of the variable "isScorePassing".
    - This function should return a boolean.

15. Create a new variable called "isScorePassing".
    - This variable should be able to receive and store the boolean result of the "checkPassingScore" function.
    - Log the value of the isPassingScore variable in the console.
*/
function checkPassingScore(score, totalScore)
{
    console.log("Is " + score + "/" + totalScore + " passing score?"); 
    let scorePercentage = (score / totalScore) * 100;
    let isScorePassing = scorePercentage >= 75; 
    // Sir M, I just want to clarify po, on the instructions, 75 is passing %, so I used >= relational operator. 
    // But the instructions just said "greater than 75", so if you really mean it, 76 and above is the passing? and I must use > operator
    return isScorePassing;
}
let isScorePassing = checkPassingScore(90, 100);
console.log(isScorePassing);





/* 16. Commit your changes with a concise, imperative statement describing the change. Example: "Add solution for the s04 activity".

17. Add the link in Boodle for s04. */