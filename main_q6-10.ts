//Question 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
// around the name is displayed. Then print the name after striping the white spaces.

// Store the person's name with whitespace characters
const name = "\tKenneth Roofan Ghoury\n";

// Print the unmodified name
console.log("Unmodified:");
console.log(name);

// Print the name after left-stripping whitespace
console.log("\nUsing lstrip():");
console.log(name.trimStart());

// // Print the name after right-stripping whitespace
// console.log("\nUsing rstrip():");
// console.log(name.trimEnd());

// // Print the name after stripping whitespace from both ends
// console.log("\nUsing strip():");
// console.log(name.trim());




//Question 7 and 8
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
// around the name is displayed. Then print the name after striping the white spaces.

// enclose your operations in print statements to see the results.
// You should create four lines that look like this:                //console.log(5 + 3)

// Addition
console.log(5 + 3);

// Subtraction
console.log(10 - 2);

// Multiplication
console.log(4 * 2);

// Division
console.log(16 / 2);

let desireNumber: number = 8;          // Store your favorite number in a variable
let message: any = "My favorite number is" // Create a message revealing your favorite number

console.log(`"message: ${desireNumber}`);                           // Print the message

// Q: 9  ------>
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals 
// your favorite number. Print that message.

let favoriteNumber = 456;
console.log(`"My Desire number is:  ${favoriteNumber}"` )


// Question 10----->
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t 
// have anything specific to write because your programs are too simple at this point, just add your name and the 
// current date at the top of each program file. Then write one sentence describing what the program does.


// I am the Auther of this QUOTE I wrote this in my class (9th)
// dated 28MAR

// add/store the quote in string
const quote: string = "A like the personality like Water because wehere it goes, it makes, it place itself.";
// add/store Auther name
const author: string = "J-Love Roofan";
// Print the formatted quote with veriables
console.log(`${author} once said, "${quote}"`);


//  Other is my one the best excercise in HTML and TYPE SCRIPT
// when I print my PROGREEME USING HTML on 18JULY 2023 before RESULTS
// HELLO WORLD
// when I Print my first progreme using TYPE SCRIPT on 17th of FEBRUARY 2024 
// On my first ONSITE CLASS at GOVERNER HOUSE

console.log("Hello World")



