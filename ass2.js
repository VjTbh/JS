// ============================================
// ASSIGNMENT 2: NESTED IF-ELSE & FOR LOOPS
// ============================================
// Instructions: Solve each task using nested if-else statements and/or for loops
// Do NOT use arrays, objects, or functions
// ============================================

// TASK 1: Grade Classification with Attendance
// Check if a student passes based on marks (>=40) and attendance (>=75%)
// If marks >= 40, check attendance. If attendance >= 75, print "Pass", else "Fail due to low attendance"
// If marks < 40, print "Fail due to low marks"

// let marks = 65;
// let attendance = 80;

let marks = 65
let attendance = 80

if(marks >= 40 ){
    if (attendance>= 75) {
        console.log("Pass");
        
    }
    else{
        console.log("fail due to low attendance");
        
    }
}
else{
    console.log("Fail due to low marks");
    
}




// ============================================

// TASK 2: Age and Income Based Insurance Eligibility
// Check if person is eligible for insurance
// Age must be between 18 and 60 (inclusive)
// If age is valid, check if income > 25000
// Print appropriate eligibility message

// let age = 25;
// let income = 30000;

let age = 25
let income = 30000

if(age >= 18 ) {
    if(age <= 60){
        if(income>25000){
            console.log("eliogible for insurance");
            
        }
        else{
            console.log("not eligible as income is less than 25000");
            
        }
        
    }
    else{
        console.log("not eligible due to age being above 60");
        
    }

}
else{
    console.log("not eligible due to age being less than 18");
    
}


let age1 = 25
let income1 = 30000

if (age1 >= 18 && age1 <= 60 && income1 > 25000) {
    console.log("Eligible for insurance")
} 
else {
    console.log("Not eligible")
}


// ============================================

// TASK 3: Temperature and Humidity Check
// If temperature > 30, check humidity
// If humidity > 70, print "Hot and Humid"
// If humidity <= 70, print "Hot but Dry"
// If temperature <= 30, print "Pleasant Weather"

 let temperature = 35;
 let humidity = 75;

 if(temperature > 30){
    if(humidity >70) {
        console.log("Hot and humid");    
    }
    else if(humidity <= 70) {
        console.log("hot but dry");
    }
 }
 else if(temperature <= 30){
    console.log("pleasant weather");
 }




// ============================================

// TASK 4: Discount Calculator
// If purchase amount > 1000, check if customer is premium
// Premium customers get 20% discount, regular get 10%
// If amount <= 1000, no discount
// Print final amount after discount

 let purchaseAmount = 1500;
 let isPremium = true;

 let finalAmount

if(purchaseAmount > 1000){
    if(isPremium){
        finalAmount = purchaseAmount - (purchaseAmount * 20/100)
    }
    else if(!isPremium){
        finalAmount = purchaseAmount - (purchaseAmount * 10/100)
    }
}
else if (purchaseAmount <= 1000){
    finalAmount = purchaseAmount
}
console.log(finalAmount);





// ============================================

// TASK 5: Voting Eligibility with Citizenship
// Check if age >= 18
// If yes, check if person is citizen
// Print appropriate eligibility message

 let voterAge = 20;
 let isCitizen = true;


 if(voterAge >= 18) {
    if(isCitizen){
        console.log("eligible to vote");
    }
    else{
        console.log("not a citizen")
    } 
 }
else{
        console.log("not eligible due to age");
    
}

// ============================================

// TASK 6: Print all even numbers from 1 to 20

for(let i=1; i <= 20; i++)
    {
    if(i %2 ==0 ){
    console.log(i); 
    }
}

// ============================================

// TASK 7: Print all odd numbers from 1 to 15

for(let i =1; i<=15;i++){
    if(i%2===1){
        console.log(i);
        
    }
}



// ============================================

// TASK 8: Calculate sum of numbers from 1 to 10

 let sum = 0;

for(let i = 0; i<=10; i++){
    sum += i
}
console.log(sum);



// ============================================

// TASK 9: Count vowels in a string
// Given: let text = "Hello World"
// Count how many vowels (a, e, i, o, u) are in the text

 let text = "Hello World";
 let vowelCount = 0;

for(let i=0; i < text.length; i++){
    if("aeiouAEIOU".includes(text[i]))
    vowelCount += 1
}
console.log(vowelCount);

// ============================================

// TASK 10: Print multiplication table of 5 (from 5x1 to 5x10)

let number = 5;

for(let i=1; i<=10; i++ ){
    console.log(`${number}*  ${i} = ${number * i}`);
}



// ============================================

// TASK 11: Check if a number is prime
// A prime number is only divisible by 1 and itself
// Check numbers from 2 to number-1, if any divides evenly, it's not prime

let num = 17;
let isPrime = true;






// ============================================

// TASK 12: Print first 10 multiples of 3

// ============================================

// TASK 13: Reverse a number
// Given: let num = 12345
// Output should be: 54321
// Hint: Use % 10 to get last digit, then divide by 10

// let originalNum = 12345;
// let reversed = 0;

// ============================================

// TASK 14: Count digits in a number
// Given: let num = 45678
// Count how many digits are in the number

// let num = 45678;
// let digitCount = 0;

// ============================================

// TASK 15: Calculate factorial of a number
// Factorial of 5 = 5 x 4 x 3 x 2 x 1 = 120

// let n = 5;
// let factorial = 1;

// ============================================

// TASK 16: Check if a number is palindrome
// A palindrome number reads the same forwards and backwards
// Example: 121, 1331, 12321

// let original = 121;
// let temp = original;
// let reversed = 0;

// ============================================

// TASK 17: Print Fibonacci sequence up to 10 terms
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
// Each number is sum of previous two

// let term1 = 0;
// let term2 = 1;
// let nextTerm;

// ============================================

// TASK 18: Count consonants in a string
// Given: let text = "JavaScript"
// Count all consonants (letters that are not vowels)

// let text = "JavaScript";
// let consonantCount = 0;

// ============================================

// TASK 19: Sum of even numbers from 1 to 50

// let evenSum = 0;

// ============================================

// TASK 20: Password Strength Checker (Nested If-Else)
// Check password length >= 8
// If yes, check if it contains a number (hint: check each character)
// If yes, check if it has uppercase letter
// Print strength: "Strong", "Medium", or "Weak"

// let password = "Pass123";
// let hasNumber = false;
// let hasUppercase = false;

// ============================================
// END OF ASSIGNMENT
// ============================================