
function createSection()
{
    console.log("===========================");
};
createSection();

//naming conventions - function in JS is case sensitive - camelCase approach is recommended way to declare functions
// should be definitive of the task it will perform. it usually starts with an action
function getProducts()
{
    let products = ['Keyboard - 5 USD', 'Monitor - 100 USD', 'Mouse - 2 USD'];
    console.log(products);
}
getProducts();
//Avoid generic names like retrieve()

createSection();

// function expression
/*
    - we use function keyword and specify a name for the function declaration
    - a function can also be stored in a variable
    - a function that created as part of an expression, typically by being assigned to a variable
*/ 
let myExpression = function myName()
{
    console.log("myName function is passed to the myExpression var");
}
myExpression();

createSection();
// Scopes in JS
// Scope determines the accessibility and visibility in JS. It's like a boundary defines where our code variables can be  used.

//Global Scope
const interest = 0.03;
function printInterest()
{
    console.log("Interest: " + interest);
}
printInterest();
console.log(interest);

// LOcal Scope
function printBalance()
{
    const balance = 10000;
    console.log("Current Balance: " + balance); 
}
printBalance();

// return statement allow us to output a value from a function to be passed to the line/block of code that called the function

function returnAuthorName()
{
    return "J.K Rowling";
}
returnAuthorName(); 

function returnStoreDetails()
{
    let storeDetails = 
    {
        products: ['Party hats', 'party poppers', 'balloons'],
        hoursOpen: '08:00-17:00',
        location: '15, happy Street, Fun Circle'
    };
    return storeDetails;
    console.log('Where is this line?');
}
let storeInfo = returnStoreDetails();
console.log(storeInfo);
