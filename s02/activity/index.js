/*
1. In the s11 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code from your Instructor. Paste the activity code to your index.js file.
*/

/*
4. Calculate the user's monthly savings and determine if the user is within their budget.
    - Use the given financial details.
    - Calculate all the monthly expenses and save it in a variable called totalMonthlyExpenses.
    - Calculate the savings from the monthly income and total expenses and save it in a variable called monthlySavings.
    - Check if the user's total monthly expenses are within their budget and save the result in a variable called isWithinBudget.
    - Log the total monthly expenses, monthly savings, and budget status to the console.
*/
let monthlyIncome = 4000;
let monthlyRent = 1200;
let monthlyGroceries = 450;
let monthlyTransportation = 300;
let monthlyUtilities = 200;
let monthlyEntertainment = 150;
let monthlyBudget = 2500;

// MY ANSWER =========================
let totalMonthlyExpenses = monthlyRent + monthlyGroceries + monthlyTransportation + monthlyUtilities + monthlyEntertainment;
let monthlySavings = monthlyIncome - totalMonthlyExpenses;
let isWithinBudget = totalMonthlyExpenses <= monthlyBudget;

console.log("Total Monthly Expenses: $"+ totalMonthlyExpenses);
console.log("Monthly Savings: $"+ monthlySavings);
console.log("Is Expenses Within a Budget?: " + isWithinBudget);

console.log("==========================");
/*
5. Calculate the Area and Circumference of a Circle
    - Use the given radius of the circle.
    - Use the formulas to find the area and circumference.
    - Save the results in variables called resultArea and resultCircumference and log them to the console.
*/
let radius = 7;
const PI = 3.14159;

// MY ANSWER =========================
let resultArea = PI * radius**2;
let resultCircumference = 2 * PI * radius;

console.log("The Area of the Circle: " + resultArea);
console.log("The Circumference of the Circle: " + resultCircumference);

console.log("==========================");
/* 
6. Calculate the area and perimeter of a triangle based on the given values for its base, height, and side lengths.
    - Use the given values for the base, height, and lengths of the three sides of the triangle.
    - Find the area of the triangle. Save it in a variable called area.
    - Given the sides, find the perimeter of the triangle. Save it in a variable called perimeter.
    - Log both the calculated area and perimeter to the console.
*/
let base = 10;
let height = 8;
let side1 = 5;
let side2 = 7;
let side3 = 9;

// MY ANSWER =========================
let area = 1/2 * base * height;
let perimeter = side1 + side2 + side3;

console.log("The Area of the Triangle: " + area + " square cm");
console.log("The Perimeter of the Triangle: " + perimeter + " cm");