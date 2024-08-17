//simple statement 
//statement is a code snippet/line of code that tell how the program will work
console.log("Hello world");

// Variables, Declaration, Initialization
let myName = "Michael Lester";
console.log(myName);

//undefined occurs when a variable is declared but not initialized or given any value
let myVar;
console.log(myVar);

myVar = "Added value";
console.log(myVar);

myVar = "Updated value";
console.log(myVar);

// Error
// console.log(hello);
// let hello = "Access me";

// CONST variable - cannot be updated
// const variable is not allowed to be empty
//use ALL CAPS in const variable
const PI = 3.1416;
console.log(PI);

// Convention in Variable Naming
// Best practices in writing code
// 1. Should Be Descriptive
// 2. Variable Start with small letters - purpose: prevent confusion other developers with built-in or developer-made classes with our variables
//camel casing - firstName
//snake casing - first_name

// avoid using reserved keyword - like let, function

// data types
// Boolean - values that normally used to store values relating to state of things ---- true or false
//numbers - number values such as integers and decimals
// string - series of characters word/phrase/sentence/ related to text

// arrays - special types of object. used to store ordered collection of values, assioted with a nemerical index
// array of numbers
let grades = [75, 76, 77, 78, 79];
console.log(grades);
// array of strings
let names = ["michael", "lester"];
console.log(names);

// objects - another special kind of data type 
// used to mimic real-world objects
// used to create complex data that contains pieces of information that are relevant to each other
// has key value pairs
let person = {
    fullName : "Michael Lester",
    age : 35,
    isMerried : false,
    adress : {
        houseNumber : '345',
        city : "manila"
    }
};
console.log(person.fullName);