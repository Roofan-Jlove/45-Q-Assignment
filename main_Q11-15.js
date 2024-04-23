"use strict";
// Question 11--------->
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, 
// one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Mark", "Adil", "Steave", "Matthew"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Question 12 ------->
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized
//  with the person’s name.
//  Arrey using the bove for Question 11
let message = "Would you join the class today for Type Scrip";
console.log(names[0] + "  " + message);
console.log(names[2] + "  " + message);
console.log(names[3] + "  " + message);
console.log(names[4] + "  " + message);
// Question 13 ----------->
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a 
// list that stores several examples. Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
let transportation = ["Suzuki", "Honda", "yamaha"];
transportation.map((items) => console.log(`I would like to own a ${items}.`));
// Question 14 ----------->
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to each 
// person, inviting them to dinner.
let Guest = ["Jason", "Harvey", "Samson"];
Guest.map((items) => console.log(`Dear ${items}, You are invited to the Dinner today.`));
// Question 15 --------------->
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["Michelle", "Naeem", "Charlie", "Mustafa"];
let unableToAttend = guestList.splice(0, 2)[0]; // remove 1 guest by splise from List
console.log((`${unableToAttend} not invited for dinner now`)); // removed on GUEST massage
console.log(guestList); // Remainnig in the GUEST LIST to FIND
guestList.push("Showon", "Daniel"); // Added 2 Guest in the LIST now
console.log(guestList); // Checking the Updated GUEST LIST after adding
guestList.forEach(Guest => {
    console.log(`Dear ${Guest}, You are invited to Dinner today at my Home.`);
});
