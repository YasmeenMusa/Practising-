// function checkA() {
//     console.log("Checking A");
//     return false;
// }

// function checkB() {
//     console.log("Checking B");
//     return true;
// }

// function checkC() {
//     console.log("Checking C");
//     return true;
// }

// if (checkA() || (checkB() && checkC())) {
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }

// document.getElementById("loginBtn").addEventListener("click",function(){
//     const usernameinput = document.getElementById("username").value
//     const message = document.getElementById("message")

//     const correctUsername = "Yasmeen123"

//     if( usernameinput === correctUsername){
//         message.textContent = "login successful! Welcome, " + usernameinput;
//         message.style.color = "green";
//     }else{
//         message.textContent = "invalid username. Try agian.";
//         message.style.color = "red";
//     }
// })


// document.getElementById("loginBtn").addEventListener("click", function() {
//     const usernameInput = document.getElementById("username").value;
//     const message = document.getElementById("message");

//     // Define correct username
//     const correctUsername = "yasmeen123";

//     // Check if input matches
//     if (usernameInput === correctUsername) {
//         message.textContent = "✅ Login successful! Welcome, " + usernameInput;
//         message.style.color = "green";
//     } else {
//         message.textContent = "❌ Invalid username. Try again.";
//         message.style.color = "red";
//     }
// });


// const cars = [
//     {
//         make: "Toyota",
//         model: "Corolla",
//         year: 2020,
//         color: "Blue"
//     },
//     {
//         make: "Honda",
//         model: "Civic",
//         year: 2019,
//         color: "Red"
//     }
// ];

// // Loop through the array of car objects
// for (let car of cars) {
//     console.log("Car details:");
//     // Loop through each property of the car object
//     for (let property in car) {
//         console.log(property + ": " + car[property]);
//     }
//     console.log("\n");  // Add a line break after each car
// }


// const isWeekend = false;
// const isHoliday = true;

// if (isWeekend && isHoliday) {
//     console.log("Enjoy your day off!");  // This will be printed
// } else {
//     console.log("Back to work.");
// }


//  const students = [
//     { name: "Alice", marks: 75, isActive: true },
//     { name: "Bob", marks: 45, isActive: true },
//     { name: "Charlie", marks: 90, isActive: false },
//     { name: "Diana", marks: 85, isActive: true },
//     { name: "Evan", marks: 30, isActive: false }
// ];
// students.forEach(student => {
//     if (student.isActive && student.marks >= 50) {
//         console.log(`${student.name} has passed.`);  // Prints if passed
//     } else {
//         console.log(`${student.name} has not passed.`);
//     }
// });


// I Tried
// const isMonday = true;
// const isGoing = false;
// const picnicDay = true;
// const willJoin = true;

// if (willJoin ||(isMonday && isGoing && picnicDay)) {
//     console.log("I will join the party!");
// }else{
//     console.log("I will not join the party.");
// }

//again tried

// const isMonday = true;
// const isGoing = false; //not going
// const ispicnicDay = true;
// const willJoin = true;
// const isConvinced = false //not convinced

// if((isMonday && !isGoing) || (ispicnicDay && willJoin && !notConvinced)){
//     console.log("I am going to the party")
// }else{
//      console.log("I am not going to the party")
//     };


// tried
//  const isSick = true;
//  const isWorkingDay = true;
//  const isFeelBetter = false; //not sure
//  const isHoliday = false //not a holiday
//  if((isSick && isWorkingDay)||(isFeelBetter || isHoliday)){
//     console.log("I will go to work");
//  }else {
//     console.log("I will sleep");
//  }

//  false || true && console.log("Yes");
//  false && true || console.log("Maybe");
//  let x = null;
//  x || console.log("No Value");
// true && false || console.log("Fallback");

// let isLoggedIn = false;
// let admin = true;
// (isLoggedIn && admin && console.log("Access Granted"));
// console.log("Access Denied");

// false || console.log("InnerFire");

// false && console.log("Hello");

// let item = document.querySelector("p");  //it just read the text not tags..So, here <b> would not affect. 
// item.textContent = "<b>Just practising how textContent Works...</b>";


// let item = document.querySelector("p"); //it also read the tags so, <b> will affect and the text become bold..
// item.innerHTML = "<b>Hello World</b>";

// console.log(Math.random()); // e.g. 0.374 //it gives us a decimal point between 0 and 1 also it gives us a new number when being again call

console.log(Math.floor(4.9)); // 4 //it doesn't do round off..
console.log(Math.floor(4.1)); // 4