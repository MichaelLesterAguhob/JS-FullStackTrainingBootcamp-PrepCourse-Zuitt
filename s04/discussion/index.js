function createSection()
{
    console.log("==========================");
}
createSection();

// prompt() - get input from a user
// commonly, this is not ideal. manipulating data is not easy
function printUserNickname()
{
    let userInput = prompt("Enter your nickname: ");
    console.log("Hello: " + userInput);
}
// printUserNickname();

function printName(name)
{
    console.log("My name is " + name);
};
printName("Michael");

function checkIfNumIsOdd(num)
{
    let remainder = num % 2;
    console.log("The remainder of the number is: " + remainder);
    let isNumberOdd = remainder > 0;
    console.log("Is " + num + " an odd number?");
    console.log(isNumberOdd);
}
checkIfNumIsOdd(18);
checkIfNumIsOdd(21);

// we can use function as arguments for other function
function printText()
{
    console.log("I am printText Function");
}
function printMessage(printText)
{
    printText();
}
printMessage(printText); // this is how to use the function as arguments. we dont use () in printText function because it will invoke the printText function
console.log(printText);
console.log(printText());  // it will result in undefined since we don't have a return statement that returns a value.

function printFullName(firstName, middleName, lastname)
{
    console.log( firstName + " " + middleName + " " + lastname);
}
printFullName('Juan', 'Dela', 'Cruz');
printFullName('Juan', 'Dela', 'Cruz', 'I am ignored'); // will not result any error even the arguments are excess. it will just ignored by JS
printFullName('Juan', 'Dela'); // undefined the last parameters since it does not provide the last  arguments needed

//we can use variables as arguments
// arguments order is important