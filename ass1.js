// ============================================
// ASSIGNMENT 1: IF-ELSE, TERNARY OPERATORS & CONTROL FLOW
// ============================================
// Topics Covered:
// - Arithmetic Operators (+, -, *, /, %, **)
// - Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
// - Logical Operators (&&, ||, !)
// - If-Else Statements
// - Ternary Operators
// - If-Else Ladder
// ============================================


// TASK 1: Basic If-Else with Numbers
// Create a variable 'temperature' with value 25
// If temperature is greater than 30, log "It's hot!"
// Otherwise, log "It's pleasant"


// let temperature = 25;
// if (temperature > 30) {
//     console.log("It's hot!");
// } else {
//     console.log("It's pleasant");
// }
// let temp = 25;
// temp > 30 ? console.log("It's hot!") : console.log("It's pleasant");


// TASK 2: If-Else with Equality Check
// Create a variable 'password' with value "1234"
// Check if password is equal to "1234" using ==
// If yes, log "Access Granted", otherwise log "Access Denied"


let password = "1234";
if (password == "1234") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}



// TASK 3: Strict Equality (===)
// Create a variable 'userInput' with string value "100"
// Create a variable 'expectedNumber' with number value 100
// Use strict equality (===) to check if they are equal
// Log "Match!" if equal, "Type mismatch!" if not equal

let userInput = "100"
let expectedNumber = 100

if(userInput === expectedNumber){
    console.log("Match!");
}
else{
    console.log("Mismatch.");
}   


// TASK 4: Ternary Operator - Age Check
// Create a variable 'studentAge' with value 16
// Use ternary operator to check if studentAge >= 18
// Store result in a variable 'status' as "Adult" or "Minor"
// Log the status

let studentAge = 16
if(studentAge >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}



// TASK 5: Logical AND Operator
// Create variables: username = "admin", password = "pass123"
// Use if statement with && to check if BOTH are correct
// username should be "admin" AND password should be "pass123"
// Log "Login Successful" if both match, otherwise "Login Failed"

let username = "admin"
let pass = 'pass123'

if(username === "admin" && password === "pass123") {
    console.log("Login Successful")
}
else{
    console.log("Login Failed")
}




// TASK 6: Logical OR Operator
// Create a variable 'day' with value "Saturday"
// Check if day is "Saturday" OR "Sunday" using ||
// If yes, log "It's weekend!", otherwise log "It's a weekday"

let day = "Saturday"
if ( day === "Saturday" || day === "Sunday") {
    console.log("It's weekend")
}
else {
    console.log("It's a weekday")
}




// TASK 7: NOT Operator (!)
// Create a variable 'isRaining' with value false
// Use ! operator to check if it's NOT raining
// If not raining, log "Go outside!", otherwise log "Stay inside"

let isRaining = false
if  (!isRaining) {
    console.log("Go outside")
}   
else {
    console.log("Stay inside")
}   




// TASK 8: Comparison Operators Practice
// Create two variables: score1 = 85, score2 = 90
// Use if-else to check which score is greater
// Log "Score 1 is higher", "Score 2 is higher", or "Both scores are equal"

let score1 = 85
let score2 = 90

if ( score1 > score2) {
console.log("Score 1 is higher")
}
else if (score1 < score2) {
  console.log('score 2 is higher')
}
else(console.log("both are same"))




// TASK 9: If-Else Ladder - Grade Calculator
// Create a variable 'marks' with value 75
// Use if-else ladder to assign grades:
// marks >= 90: "A+"
// marks >= 80: "A"
// marks >= 70: "B"
// marks >= 60: "C"
// marks >= 50: "D"
// marks < 50: "F"
// Log the grade





// TASK 10: Nested Ternary Operator
// Create a variable 'number' with value 0
// Use nested ternary to check:
// If number > 0, result is "Positive"
// If number < 0, result is "Negative"
// Otherwise, result is "Zero"
// Log the result


let number = 0
if (number > 0) {
  console.log("Positive")
}
else if(number <0){
  console.log("Negative")
}
else{console.log("zero")}




// TASK 11: Arithmetic Operators in Conditions
// Create variables: num1 = 15, num2 = 5
// Calculate sum, difference, product, quotient, remainder, and power
// Use if-else to check if the sum is greater than 20
// Log "Sum exceeds 20" or "Sum is 20 or less"


let num1 = 15
let num2 = 5

let sum = num1 + num2
if (sum > 20) {
  console.log("Sum exceeds 20")
}   
else {
  console.log("Sum is 20 or less")
}

let dif = num1 - num2
let prod = num1 * num2
let quot = num1 / num2
let rem = num1 % num2
let pow = num1 ** num2  




    // TASK 12: String Comparison
    // Create a variable 'userRole' with value "admin"
    // Use if-else to check the role:
    // If "admin", log "Full Access"
    // If "editor", log "Edit Access"
    // If "viewer", log "Read Only Access"
    // Otherwise, log "No Access"


userRole = "admin"
if(userRole === "admin"){
  console.log("Full Access")
}
else if(userRole === "editor"){
  console.log("Edit Access")
}
else if (userRole === "viewer") {
  console.log("viewer access")
}

else {console.log("no access")}


// TASK 13: Multiple Conditions with AND
// Create variables: age = 25, hasLicense = true (use 1 for true, 0 for false)
// Check if age >= 18 AND hasLicense == 1
// If both true, log "Can drive", otherwise log "Cannot drive"
let age = 35
let hasLicense = 1


if (age >= 18 && hasLicense == 1) {
  console.log("can drive")
}
else{console.log("cannot drive")}




// TASK 14: Multiple Conditions with OR
// Create a variable 'paymentMethod' with value "card"
// Check if paymentMethod is "card" OR "upi" OR "cash"
// If any matches, log "Payment method accepted"
// Otherwise, log "Invalid payment method"

let paymentMethod = "online"
if(paymentMethod == "card" 
    || paymentMethod== "upi" 
    || paymentMethod == "cash"){
  console.log("Payement method accepted")
}
else{
  (console.log("Inavalid payment method"))
}





// TASK 15: Ternary with Arithmetic
// Create variables: price = 100, discount = 20
// Calculate finalPrice = price - discount
// Use ternary to check if finalPrice < 100
// If yes, store "Discounted" in variable 'priceStatus', otherwise "Regular"
// Log the priceStatus


price = 100
discount = 20

finalPrice = price - discount
let priceStatus

if (finalPrice < 100) {
  priceStatus = "Discounted"
}
else{
  priceStatus = "Regular"
}
console.log(priceStatus)






// TASK 16: If-Else Ladder - Month to Season
// Create a variable 'month' with value 3
// Use if-else ladder to determine season:
// month 12, 1, 2: "Winter"
// month 3, 4, 5: "Spring"
// month 6, 7, 8: "Summer"
// month 9, 10, 11: "Autumn"
// Otherwise: "Invalid month"
// Log the season

let month = 3

if ( month == 12 || month == 1 || month == 2){
    console.log("winter")
  }
else if ( month == 3 || month == 4 || month == 5){
  console.log("spring")
}

else if ( month == 6 || month == 7 || month == 8){
  console.log("summer")
}
else if ( month == 9 || month == 10 || month == 11){
  console.log("autmn")
}
else{
  console.log("invalid month")
}





// TASK 17: NOT Equal Operator (!=)
// Create a variable 'currentStatus' with value "pending"
// Check if currentStatus != "completed"
// If true, log "Task is still in progress"
// Otherwise, log "Task is done"


let currentStatus = "pending"

if (currentStatus != "completed") {
    console.log("Task is still in progress") 
}
else {
    console.log("Task is done")
}





// TASK 18: Strict NOT Equal (!==)
// Create variables: input = "50", target = 50
// Use !== to check if they are not strictly equal
// Log "Different types" if true, "Same type and value" if false


let input = "50"
let target = 50
if (input !== target) {
  console.log("Different types")
}               
else {
  console.log("Same type and value")
}





// TASK 19: Combining Multiple Operators
// Create variables: x = 10, y = 20, z = 30
// Check if (x + y) is equal to z using ==
// Also check if x < y AND y < z using &&
// If both conditions are true, log "All conditions met"
// Otherwise, log "Conditions not met"

let x = 10
let y = 20
let z = 30

if (( x+y == z) && (x < y && y < z))
{
  console.log("all conditions met")
}
else{
  console.log("conditions not met")
}





// TASK 20: Ternary Chain - Traffic Light
// Create a variable 'light' with value "yellow"
// Use ternary operator to determine action:
// "red" -> "Stop"
// "yellow" -> "Slow Down"
// "green" -> "Go"
// Store in variable 'action' and log it
// Hint: Use nested ternary like: condition1 ? value1 : (condition2 ? value2 : value3)


let light = "yellow"
let action

if (light === "red") {
  action = "Stop"
}
else if (light === "yellow") {
  action = "Slow Down"
}
else {
  action = "Go"
}
console.log(action)





// BONUS TASK 21: Complex Logical Expression
// Create variables: temperature = 28, humidity = 70
// Check if temperature > 25 AND humidity > 60
// If true, log "Uncomfortable weather"
// If temperature > 25 but humidity <= 60, log "Warm but dry"
// If temperature <= 25, log "Pleasant weather"


let temperature = 28
let humidity = 70

if(temperature >25 && humidity >60) {
  console.log("uncomfortable weather")
}
else if(temperature >25 && humidity <= 60){
  console.log("warm but dry")
}
else if(temperature <= 25){
  console.log("pleasant weather")
}





// BONUS TASK 22: Modulo Operator in Conditions
// Create a variable 'number' with value 17
// Use modulo operator (%) to check if number is even or odd
// Hint: number % 2 == 0 means even, otherwise odd
// Use ternary operator to store "Even" or "Odd" in variable 'numberType'
// Log the numberType


let num = 17
let numberType

if(number % 2 == 0){
  numberType = "even"
}
else {
  numberType = "odd"
}
console.log(numberType)






// BONUS TASK 23: Power Operator in Conditions
// Create a variable 'base' with value 2
// Calculate result = base ** 3 (2 to the power of 3)
// Check if result > 5
// Log "Power result is greater than 5" or "Power result is 5 or less"


let base = 2
let result = base ** 3

if (result > 5) {
  console.log("Power result is greater than 5")
}       
else {
  console.log("Power result is 5 or less")
}  





// BONUS TASK 24: Assignment Operators Practice
// Create a variable 'counter' with value 10
// Use += to add 5 to counter
// Use -= to subtract 3 from counter
// Use *= to multiply counter by 2
// Check if final counter value is greater than 20
// Log "Counter exceeded 20" or "Counter is 20 or less"


let counter = 10
counter += 5
counter -= 3
counter *= 2

if (counter > 20) {
  console.log("counter exceeded 20")
}
else{
  console.log("counter is 20 or less")
}




// BONUS TASK 25: String Concatenation in Conditions
// Create variables: firstName = "John", lastName = "Doe"
// Create fullName by concatenating firstName + " " + lastName
// Check if fullName length is greater than 5 (use fullName.length)
// If yes, log "Long name", otherwise log "Short name"


firstName = "john"
secondName = 'doe'

fullName = firstName + " " + secondName

if (fullName.length > 5) {
  console.log("long name")
}
else{
  console.log("short name")
}



