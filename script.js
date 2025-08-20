let userName = "Dilnoza";
const age = 16
let city = "Khorog";
let isMember = true;
let bookRead = 28;

let greeting = "Hi, "+userName+ " is from " + city;
console.log(greeting);

let futureAge = age + 5;
console.log("After 5 years will be: " + futureAge);

let bookPerYear = bookRead / age;
console.log("One book for one year: " + bookPerYear);

let ageInMonth = age * 12;
console.log("Age in months: " + ageInMonth);

// Logic and ternary operator
let access = isMember ? "Connection is allowed" : "No connection"
console.log("Status of connection: " + access);

// Logic expression
if(isMember && age>=18) {
    console.log("Adult user with connection");
} else {
    console.log("Connection is allowed");
}

// Comparing 
console.log("Equal 25 years? ", age == 25);
console.log("Not 30 years? ", age != 30); 


    
    
    

