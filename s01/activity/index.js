/*
1. In the "s01" folder, create an "activity" folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
 */

/*
3. Create the following variables to store your details:
    Variable Name - Value Data Type:
    - firstName - String
    - lastName - String
    - age - Number
    - hobbies - Array
    - myPlaylist - Array
    - myMovies - Array
- Log the values of each variable in the console
- All arrays should contain at least 3 Strings.
*/

    //Add your variables and console.log for objective 1 here:
    let firstName = "Michael Lester";
    let lastName = "Aguhob";
    let age = 24;
    let hobbies = ["Coding", "PLaying Rubics Cube", "Watching Anime"];
    let myPlaylist = ["Tadhana", "Hawak Kamay", "Buwan"];
    let movies = ["Onepiece Film Red", "I am Legend", "World War Z", "The Silent Sea", "Zombies", "Survival"];

    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(hobbies);
    console.log(myPlaylist);
    console.log(movies);

/* 
4. Create 3 objects with details about 3 of your favorite video games or books with the following properties:
    - name - String
    - createdOn - String
    - author/creator - String
    - publisher - String
    - totalSales - Int
    - isAvailable - Boolean
    
    Variable Names:
    - game1/book1
    - game2/book2
    - game3/book3

- Log the values in the console.
*/

let book1 = 
{
    name : "Rich Dad Poor Dad",
    createdOn : "April 1997",
    author : "Robert Kiyosaki",
    publisher : "Rich Dad Company",
    totalSales : 480000000,
    isAvailable : true
}
console.log(book1);

let book2 = 
{
    name : "Atomic Habits",
    createdOn : "October 16, 2018",
    author : "James Clear",
    publisher : "Penguin Random House",
    totalSales : 300000000,
    isAvailable : true
}
console.log(book2);

let book3 = 
{
    name : "Think and Grow Rich",
    createdOn : "1937",
    author : "Napoleon Hill",
    publisher : "Fawcett Crest",
    totalSales : 1500000000,
    isAvailable : true
}
console.log(book3);
