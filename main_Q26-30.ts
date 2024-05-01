





























console.log("\n---------QUESTION # 29 -----------\n");

// Make an array of your three favorite fruits
const favorite_fruits: string[] = ["bananas", "apples", "blueberries"];

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


console.log("\n---------QUESTION # 29 -----------\n");



// Make an array of usernames (including 'admin')
const usernames: string[] = ["eric", "admin", "alice", "bob", "admin123"];

// Get user input (you can replace this with actual login logic)
const user: string = prompt("Enter your username:").toLowerCase();

// Check if the user is in the array
if (usernames.includes(user)) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
} else {
    console.log("User not found. Please try again.");
}

