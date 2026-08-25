// Section 4 - Date Object

// 17. Current Date and Time
let currentDate = new Date();
console.log("17. Current Date and Time:");
console.log(currentDate);


// 18. Store a Specific Date
let specificDate = new Date("2026-01-01");
console.log("18. Specific Date:");
console.log(specificDate);


// 19. Current Timestamp
console.log("19. Current Timestamp:");
console.log(Date.now());


// 20. Simple Date Difference
let date1 = new Date("2026-01-01");
let date2 = new Date("2026-01-02");

let difference = date2 - date1;

console.log("20. Date Difference in Milliseconds:");
console.log(difference);