"use strict";
// console.log("Hello World")
Object.defineProperty(exports, "__esModule", { value: true });
// Q-2
//Personal Message: Store a person’s name in a variable, and print a message to that person. // Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "roOfaN"; // // Declare a variable to store the person's name
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// // Print a personalized message ( Hello Roofan, would you like to learn some Python today? )
// // Q:3
console.log(`Lowercase: ${personName.toLowerCase()}`); // // Print the name in lowercase
console.log(`Uppercase: ${personName.toUpperCase()}`); // Print the name in uppercase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
console.log(`Titlecase: ${toTitleCase(personName)}`); // Print the name in title case
// // another Way
console.log(personName.charAt(0).toUpperCase() + personName.slice(1));
console.log(personName.slice(0, 4));
// Q-4Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// // Define the quote and its author
console.log('Albert Einstein once said,"A person who never made a mistake never tried anything new."');
const quote = "A like the personality like Water because wehere it goes, it makes, it place itself.";
const author = "J-Love Roofan";
// // Print the formatted quote
console.log(`${author} once said, "${quote}"`);
// // Store the famous person's name in a variable
let famous_person = "Albert Einstein";
// // Compose the message
let message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
// // Print the message
// console.log(message);
