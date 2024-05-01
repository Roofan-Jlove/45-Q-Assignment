console.log("\n------QUESTION # 21 --------\n");

// They think of something you could store in a TypeScript Object. Write a program that creates 
// Objects containing these items.

interface itCourse {                        // Declare interface or type of Object
    name: string;
    location: string;
    studentsNumber: number;
};
let itCourse = {                           // Assign the values to OBJECT
    name:"Web 3.0 , AI , Metaverse",
    location: "Governer House Sindh",
    studentsNumber: 50000,
}
console.log(itCourse);                     // Print the OBJECT

console.log("\n----------QUESTION # 22 -----------\n");

// Intentional Error: If you haven't received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

let coleagues : string[] = ["Tom", "Jerry", "Pegion", "Doggo"];

// Let's intentionally access an invalid index (out of bounds)
// Uncomment the line below to produce an index error:
console.log(coleagues[4]); // This will throw an error

// Correct the error by ensuring the index is within the valid range
console.log("Guest at index 3:", coleagues[3]); // Prints "Doggo"

console.log("\n-------QUESTION # 23-----------\n");
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = 'subaru';

// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Should be True

// Test 2: Check if car is equal to 'honda'
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Should be False

// Test 3: Check if car is not equal to 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Should be True

// Test 4: Check if car starts with 'su'
console.log("Does car start with 'su'? I predict True.");
console.log(car.startsWith('su')); // Should be True

// Test 5: Check if car ends with 'ru'
console.log("Does car end with 'ru'? I predict True.");
console.log(car.endsWith('ru')); // Should be True

// Test 6: Check if car contains 'bar'
console.log("Does car contain 'bar'? I predict False.");
console.log(car.includes('bar')); // Should be False

// Test 7: Check if car is an empty string
console.log("Is car an empty string? I predict False.");
console.log(car === ''); // Should be False

// Test 8: Check if car has a length greater than 5
console.log("Is car length > 5? I predict True.");
console.log(car.length > 5); // Should be True

// Test 9: Check if car is undefined
console.log("Is car undefined? I predict False.");
console.log(car === undefined); // Should be False

// Test 10: Check if car is null
console.log("Is car null? I predict False.");
console.log(car === null); // Should be False


console.log("\n-------QUESTION # 24 ------------\n");
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Define an array of items
const myArray: string[] = ["apple", "banana", "cherry", "date"];

// 1. Tests for equality and inequality with strings
console.log("Equality test:");
console.log("banana" === "banana"); // Should be true

console.log("Inequality test:");
// console.log("apple" !== "cherry"); // Should be true

// 2. Tests using the lower case function
const fruit = "Apple";
console.log("Lowercase test:");
console.log(fruit.toLowerCase() === "apple"); // Should be true

// 3. Numerical tests
const num1 = 10;
const num2 = 20;

console.log("Equality test (numeric):");
// console.log(num2 === num1); // Should be false

console.log("Greater than test:");
console.log(num2 > num1); // Should be true

console.log("Less than or equal to test:");
console.log(num1 <= num2); // Should be true

// 4. Tests using "and" and "or" operators
const sunnyDay = true;
const weekend = false;

console.log("Logical AND test:");
console.log(sunnyDay && weekend); // Should be false

console.log("Logical OR test:");
console.log(sunnyDay || weekend); // Should be true

// 5. Test whether an item is in an array
const searchItem = "cherry";
console.log("Array inclusion test:");
console.log(myArray.includes(searchItem)); // Should be true

// 6. Test whether an item is not in an array
const missingItem = "grape";
console.log("Array exclusion test:");
console.log(!myArray.includes(missingItem)); // Should be true




console.log("\n-------QUESTION # 25 ------------");


// Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color: string = 'green'; // Change the color to 'yellow' or 'red' for different scenarios

// Version 1 (Passes the if test):
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down a green alien.");
} else {
    console.log("No points earned. Keep aiming!");
}

// Version 2 (Fails the if test, no output):
// Uncomment the line below to see the failing scenario:
if (alien_color === 'blue') {
    console.log("This line won't be executed.");
}











