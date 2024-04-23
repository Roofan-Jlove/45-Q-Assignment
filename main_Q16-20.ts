// Question 16 --------->

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
// invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you 
// found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let guestList : string[] = ["Michelle" , "Naeem" , "Charlie" , "Mustafa" , "Shawon"]

console.log(guestList);                                         // ActualGUEST LIST to we have
guestList.forEach(guest => {
    console.log(`Dear ${guest}, Great News we got bigger table and we are inviting rest Friends as well.`);    
})
// guestList.push("Showon" , "Daniel")                      // Added 2 Guest in the LIST now
// console.log(guestList);                                         // Checking the Updated GUEST LIST after adding

guestList.unshift("Ali Shah")                              // Added a GUEST Firs in the ARRAY using[ UNSHIFT ] mthd 
console.log(guestList);                                    // Check Guest name added at correct place (First)

  //  Added another person in middle place using SPLICE and MATH and FLOOR
guestList.splice(Math.floor(guestList.length/2), 0, "Peter")
console.log(guestList);                                    // Check GUEST name added at the correct place

guestList.push("Russel")                                   // Add an other Person in the LAST in ARRAY
console.log(guestList);                                    // Check GUEST added in the RIGHT PLACE


guestList.forEach(Guest => {                              // Now at last inviting the NEW GUEST LISH for DINNER

    
    console.log(`Dear ${Guest}, You are invited to Dinner today at my Home.`)
});


// Question 17 ------------->
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you 
// have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
// two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
// from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// have an empty list at the end of your program.

// Main LINKED with LAST QUESTION

let listOfGuest : String[] = ["Ali Shah", "Michelle" , "Naeem" , "Peter" , "Charlie" , "Mustafa"]

console.log("unfortunatly! The table we got in sice is vey small so, we need tp remove 2 form list");

listOfGuest.forEach(guest => {
    console.log(`Dear ${guest}, "unfortunatly! The table we got in sice is vey small so, we need tp remove 2 form list`);    
})






