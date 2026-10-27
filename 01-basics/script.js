// Declare a variable name and store your name in it. Print it.
let myname = "Pratul"
console.log(myname)

// Create variables for your age, height, and whether you're a student.

let myage = 22;
let myheight = 5.8;
let isStudent = false;

console.log(`Hii, I am ${myname} my age is ${myage} my height is ${myheight} and I am ${(function(isStudent){
    if (isStudent === true) return "Student";
    return "Not a student";
})()}`)

// Swap the values of two variables without using a third variable.
let one = 1;
let two = 2;
[one, two] = [two, one]
console.log(one, two);

// Find the data type of different values:- "Hello"
// - 100
// - true
// - null
// - undefined

console.log(typeof "Hello")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

//Take two numbers and print:- Sum
// - Difference
// - Product
// - Quotient
// - Remainder

let firstNumber = 10
let secondNumber = 20

console.log(`Difference of ${firstNumber} and ${secondNumber} is ${secondNumber-firstNumber}`)
console.log(`Product of ${firstNumber} and ${secondNumber} is ${secondNumber*firstNumber}`)
console.log(`Quotient of ${firstNumber} and ${secondNumber} is ${secondNumber/firstNumber}`)
console.log(`Remainder of ${firstNumber} and ${secondNumber} is ${secondNumber%firstNumber}`)

// Convert Celsius to Fahrenheit.
let celsius = 50;
console.log(`50 degree celsius in fahrenheit is ${celsius * (9/5) + 32}`)

// Calculate the area of a rectangle using length and width.
let length = 100;
let width = 200;
console.log(`Area of rectange is ${length*width}`);

//Find whether a number is even or odd.
let randomNumber = 10;
if (randomNumber % 2 === 0){
    console.log("Even number")
}
else{
    console.log("Odd number")
}

//Check if a number is positive, negative, or zero.
let randomNumber1 = 0;
if (randomNumber1>0){
    console.log("Positive Number");
}
else if (randomNumber1<0){
    console.log("Negative Number");
}
else{
    console.log("Zero");
}

// Find the largest among three numbers.
let number1 = 10, number2 = 20, number3 = 40;
if (number1>number2 && number1>number3){
    console.log(`Largest number is ${number1}`)
}
else if (number2> number1 && number2>number3){
    console.log(`Largest number is ${number2}`)
}
else{
    console.log(`Largest number is ${number3}`)
}
// Check if a year is a leap year.
let year = 1900;
if (year%4===0){
    if (year%100===0 && year%400!==0){
        console.log("Not a leap year")
    }
    else{
        console.log("Leap year")
    }
}
// Check whether a character is a vowel or consonant.
let char = "t";
if (char === "a" || char === "e" || char === "u" || char === "o" || char === "i"){
    console.log("vowels")
}
else{
    console.log("Consonant")
}
// Assign grades:
//     - 90–100 → A
//     - 80–89 → B
//     - 70–79 → C
//     - 60–69 → D
//     - Below 60 → F
let mark = 86;
let grade = null;
if (mark<=100 && mark>=90){
    grade = "A"
}
else if (mark<=89 && mark>=80){
    grade = "B"
}
else if (mark<=79 && mark>=70){
    grade = "C"
}
else if (mark<=69 && mark>=60){
    grade = "D"
}
else{
    grade = "F"
}
console.log(`Grade: ${grade}`)
// Check whether a person is eligible to vote.
let person1 = ({
    "name": "Pratul",
    "age": 22
});
if (person1.age>=18){
    console.log(`Congrats ${person1.name}, you are eligible to vote`)
}
else{
    console.log(`Oops, ${person1.name} you are not eligible to vote. Try next time`)
}


