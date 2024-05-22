"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n---------QUESTION # 26 -----------\n");
console.log("---FIRST VERSION---");
let alien_color = "green";
if (alien_color === "green") {
    console.log("Alien color is green, player just earnd 5 points to shoting the alien");
}
else {
    console.log("Alien color is not green, player earned 10 points");
}
console.log("\n---SECOND VERSION---");
let alien_color1 = "red";
if (alien_color1 === "green") {
    console.log("Alien color is green, player just earnd 5 points to shoting the alien");
}
else {
    console.log("Alien color is not green, player earned 10 points");
}
console.log("\n---------QUESTION # 27 -----------\n");
console.log("\n---FIRST VERSION---");
let alien_colorV1 = "green";
if (alien_colorV1 === "green") {
    console.log("(Version 1) Alien color is green, player just earnd 5 points to shoting the alien");
}
else if (alien_colorV1 === "yellow") {
    console.log("(Version 1) Alien color is yellow, player just earnd 10 points to shoting the alien");
}
else if (alien_colorV1 === "red") {
    console.log("(Version 1) Alien color is red, player just earnd 15 points to shoting the alien");
}
console.log("\n---SECOND VERSION---");
let alien_colorV2 = "yellow";
if (alien_colorV2 === "greem") {
    console.log("(Version 2) Alien color is green, player just earnd 5 points to shoting the alien");
}
else if (alien_colorV2 === "yellow") {
    console.log("(Version 2) Alien color is yellow, player just earnd 10 points to shoting the alien");
}
else if (alien_colorV2 === "red") {
    console.log("(Version 2) Alien color is red, player just earnd 15 points to shoting the alien");
}
console.log("\n---THIRD VERSION---");
let alien_colorV3 = "red";
if (alien_colorV3 === "greem") {
    console.log("(Version 3) Alien color is green, player just earnd 5 points to shoting the alien");
}
else if (alien_colorV3 === "yellow") {
    console.log("(Version 3) Alien color is yellow, player just earnd 10 points to shoting the alien");
}
else if (alien_colorV3 === "red") {
    console.log("(Version 3) Alien color is red, player just earnd 15 points to shoting the alien");
}
console.log("\n---------QUESTION # 28 -----------\n");
//  Creating  Veriable
let age = 22;
// If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is an Infant baby");
}
//  If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a Toddler Child");
}
//  If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a Small Kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a Teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is an Adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 65) {
    console.log("The person is an elder person");
}
console.log("\n---------QUESTION # 29 -----------\n");
// Make an array of your three favorite fruits
const favorite_fruits = ["bananas", "apples", "blueberries"];
// Check if specific fruits are in the array
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("blueberries")) {
    console.log("You really like blueberries!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (favorite_fruits.includes("Mellon")) {
    console.log("You really like Mellon!");
}
console.log("\n---------QUESTION # 30 -----------\n");
// Make an array of usernames (including 'admin')
const userNames = ["Eric", "Admin", "Alice", "Boby", "Shawon"];
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, Would you like to see status repot`);
    }
    else {
        console.log(`Hello ${oneUser}, Thank you for logging in again`);
    }
});
// Get user input (you can replace this with actual login logic)
// const user: string = prompt("Enter your username:").toLowerCase();
// Check if the user is in the array
// if (userNames.includes(user)) {
//     if (user === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${user}, thank you for logging in again.`);
//     }
// } else {
//     console.log("User not found. Please try again.");
// }
