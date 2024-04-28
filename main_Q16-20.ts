console.log("---QUESTION # 16----")

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


console.log("---QUESTION # 17----")
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
console.log(listOfGuest);                 // Print to know the actual Guest LIST is

// console.log("unfortunatly! The table we got is very small in size so, we need tp remove 2 form list");

listOfGuest.forEach(guest => {
    console.log(`Dear ${guest}, "unfortunatly! The table we got is very small in size so, we need tp remove 2 form list`);    
})

//  Removing the GUEST from the ACTUAL GUEST lIST // We are REMOVING 2 GUEST ONLY

while(listOfGuest.length > 2){                       // remove all more then 2
    let removeGuest : any | undefined = listOfGuest.pop();      // undifined is remaning 2
    if(removeGuest !== undefined){
        console.log(`Sorry Dear ${removeGuest}, We can't Invite you `);        //  msge to all REMOVED ones
    }
}
console.log(listOfGuest);                    // Update REMAINING GUEST LIST

//  Sen d the MSGE of REMANGNG that they are still INVITED
listOfGuest.forEach(guest => {
    console.log(`Dear ${guest}, You are Still Invited for the dinner.`);    
}  )
//  REMOVE the ALL GUEST from the LIST
    listOfGuest.forEach(guest => {
        console.log(`Dear ${guest}, Sorry Dinner Party is cancelled for now, we will arrange it later.`);
})

listOfGuest.splice(0,listOfGuest.length)
console.log("Updated Guest is now Empty:" , listOfGuest);


// Another WAY to SOLVE

// Changing Guest List: You just heard that one of your guests can't make the dinner,
// so you need to send out a new set of invitations. You'll have to think of someone else to invite.

// Assuming you have an existing guest list:
const originalGuests: string[] = ["Alias", "Bob", "Kano", "David"];

// The guest who can't make it:
const guestWhoCantMakeIt: string = "David";

// New guest to invite:
const newGuest: string = "Anjelina";

// Remove the guest who can't make it:
const updatedGuests: string[] = originalGuests.filter((guest) => guest !== guestWhoCantMakeIt);

// Add the new guest:
updatedGuests.push(newGuest);

// Print the updated guest list:
console.log("Updated Guest List:");
updatedGuests.forEach((guest, index) => {
  console.log(`${index + 1}. ${guest}`);
});

console.log("---QUESTION # 18----")
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit : string[] = ["Male" , "Bali" , "phuket" , "Kashmir" , "Greace"];
// Print of ARRAY as it ORIGINAL FORMATION
console.log("Original Order" , placesToVisit);                     // original array

// Now we making the ARREY to PRINT in ALPHABATICAL ORDER
console.log("Alphabatical Order" , placesToVisit.slice().sort());         //  Alphabatical Order
console.log("Arrey is Still Original Order" , placesToVisit);             // Array is Still as ORIGNAL

// Now it will REVRESE ALOHABATICAL ORDER
console.log("Reverse Alphabatical Order" , placesToVisit.slice().sort().reverse());  // Reverse Alphabatical Order
console.log("Arrey is Still Original Order" , placesToVisit);             // Array is Still as ORIGNAL

// REVRWSE ORIGINAL ORDER ARRAY
placesToVisit.reverse();
console.log("Original Order is now REVERSE" , placesToVisit);

// REVERSE AGIAN BACK TO ORIGINAL
placesToVisit.reverse();
console.log("REVERSE AGAIN now BACK to ORIGINAL ORDER" , placesToVisit);

// Now it AGAIN CHANGE IT AS ALPHABATICAL ORDER
console.log("Sorted agian in Alphabatical Order" , placesToVisit.slice().sort());         // REMAKE  Alphabatical Order

//  Now it AGAIN REVERSE ALPHABATICAL ORDER
console.log("SORTED AGAIN as REVRSE Alphabatical Order" , placesToVisit.slice().sort().reverse());  // Reverse Alphabatical Order



console.log("---QUESTION # 19----")

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating 
// the number of people you are inviting to dinner.

let Guest : string[] = ["Jason" , "Harvey" , "Samson"]

let guestLength = Guest.length

console.log(`We invited total guest of: ${guestLength}`);


console.log("---QUESTION # 20---------");

// Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing 
// these items.

// Think of something you could store in an array.
// For example, you could make a list of mountains, rivers, countries, cities, languages,
// or anything else you’d like. Write a program that creates a list containing these items.

const cities: string[] = ["London", "Munich", "Cancun", "Paris", "Tokyo"];

// Print in the LIST FORM on EACH LINE
cities.forEach(city => {
    console.log(`In the form of un order list: ${city}`);        
});

// Print the original Order
console.log("Original list of cities:");
console.log(cities);

// Print the list in alphabetical order
console.log("Cities in alphabetical order:");
console.log(cities.sort());

// Print the list in reverse alphabetical order
console.log("Cities in reverse alphabetical order:");
console.log(cities.sort((a, b) => b.localeCompare(a)));

// Reverse the order of the list
cities.reverse();
console.log("Reversed list of cities:");
console.log(cities);

// Sort the list in alphabetical order
cities.sort();
console.log("Sorted list of cities:");
console.log(cities);

// Sort the list in reverse alphabetical order
cities.sort((a, b) => b.localeCompare(a));
console.log("Reversed sorted list of cities:");
console.log(cities);

















