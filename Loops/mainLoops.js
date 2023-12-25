// Difficulty Level: Low
// Exercise 1
// Using a "for" loop, create a program that allows the entry of a number between 1 and 100 through a prompt, 
// Then it prints through the console all the numbers that are between the entered number and 0 (that is, in descending order ).
// Let's assume that the number entered is 5. This would be the result:
// 5
// 4
// 3
// 2
// 1
// 0
function descendingNumbers (number){
    const numberReceived = Number(prompt(`Enter a number between 1 and 100`))
    const descendingValues = []
    if(numberReceived >= 1 && numberReceived <= 100){
        for (let i = numberReceived; i >= 0; i--) {
            const numbersRange = (i)
            console.log(numbersRange)
            descendingValues.push(numbersRange)
        }
    }
    return descendingValues
}

const result = descendingNumbers()

console.log(result)


// Exercise 2
// Using a "for" loop, make a program that allows the entry of a number through a prompt between 1 and 10, 
// and displays through the console it multiplication table (the first 10 multiples only).
// Suppose the number entered is 5. This would be the result:
// 1x5=5
// 2x5=10
// 3x5=15
// 4x5=20
// 5x5=25
// 6x5=30
// 7x5=35
// 8x5=40
// 9x5=45
// 10x5=50
function multiplication(number){
    const numberReceived = Number(prompt(`Enter a number between 1 and 10`))
    if(numberReceived >= 1 && numberReceived <= 10){
        for (let i = 1; i <= 10; i++) {
            const numbersMultiplication = `${numberReceived} x ${i} = ${numberReceived*(i)}`
            console.log(numbersMultiplication)
        }
    } else {
        console.log(`Invalid number`)
    }
}

multiplication()


// Exercise 3
// Using a "while" loop, create a program that allows the entry of numbers through a prompt. 
// The numbers must be added (acumulated) into a resulting variable. The entry of numbers will end when the user enters a 0. 
// At the end, display the value of the sum variable through console.
// Suppose you entered 1 then 3 then 0. This would be the result: 4. 
// Tip! Be careful, remember that the promt returns a string.
let acumulated1 = 0
let numberReceived = Number(prompt(`Enter a number or 0 to finish.`))

while(numberReceived !== 0){
    acumulated1 += numberReceived
    numberReceived = Number(prompt(`Enter a number or 0 to finish.`))
}

console.log(acumulated1)


// OTRA SOLUCION
let suma2 = 0

while (true) {
    const numero = Number(prompt(`Ingrese un numero o 0 para temrinar.`))
    if(numero == 0){
        break;
    }
    suma2 = suma2 + numero
} 

console.log(suma2)


// Exercise 4
// Using now a "do while" loop and following the same instructions as the previous exercise, display in the console, 
// the value of the variable that accumulates the sum of the numbers entered.
// Suppose you entered 1 then 3 then 0. This would be the result: 4
// Tip! use backticks for this.
let acumulated4 = 0
do {
    numberReceived4 = Number(prompt(`Enter a number or 0 to finish.`))
    acumulated4 += numberReceived4
} while (numberReceived4 !== 0);
    console.log(`The operation has been completed. The result is: ${acumulated4}`);


// Exercise 5
// Using a "for in" loop, create an object with at least 5 properties, make a program that cycles through said object and only shows all the keys of its properties in the console.
// In the console it should look like this:
// name
// lastName
// origin
// studies
let person = {
    name: `Juan`,
    lastName: `Perez`,
    origin: `La Falda. Córdoba`,
    studies: `University`,
    age: 45
};

for (let key in person) {
    console.log(key)
}


// // Exercise 6
// // Using a "for in" loop, create a program that runs through the object created in previous exercise and only displays the values of each of the keys in the console. 
for (let key in person) {
    console.log(`The properties and values are "${key}: ${person[key]}"`)
}


// Difficulty Level: Medium
// Excersise 1
// Using the loop that you consider, we are going to use the variable that stored the sum of the numbers in exercise #3 as a "secret number". 
// The new program will allow numbers to be entered through a prompt until the number entered is equal to the one saved in the variable of exercise #3.
// If the value entered is greater than the "secret" number, notify the user through the console ("the number entered is greater than the secret", the same if the value is less.
// So on until the user guesses the secret number. Finally, show a congratulatory message on the screen and tell you how many attempts you have made 
// ("You got it right! The secret number was <number> and you made <x> attempts"
let acumulated = 25
let secretNumber = acumulated
let attempts = 0

while (true) {
    enteredNumber = Number(prompt(`Enter the number corresponding to the password.`))
    attempts ++
    if(enteredNumber == secretNumber){
        alert(`You got it right! The secret number was ${secretNumber} and you made ${attempts} attempts.`)
        break;

    } else if (enteredNumber > secretNumber){
        alert("The number entered is greater than the secret number.")

    } else {
        alert("The number entered is less than the secret number.")
    }
}


// Excersise 2
// Using the loop that you consider as correct, create a program that receives a number through a prompt and displays all its divisors (dividers) through the console.
// Tip: DIVISORS/DIVIDERS: are all natural numbers that exactly divide another natural number. 
// Example: “The divisors of '15' are: 1, 3, 5 and 15. (The division of '15' between any of these numbers is exact)
// Suppose 50 was entered. This would be the result 50, 25, 10, 5, 2, 1
// Tip! remember or investigate the operator %
let numberReceived2 = Number(prompt(`Enter a number to find its divisors.`))
let divisors = []

for (let i = 1; i <= numberReceived2; i++) {
    if (numberReceived2 % i === 0){
        console.log(i)
        divisors.push(i)
    }
}

console.log(divisors)

// CON BUCLE DO WHILE
let numberReceived2_1 = Number(prompt(`Enter a number to find its divisors.`))
let i = 1

do {
    if (numberReceived2_1 % i === 0) {
        console.log(i);
    }
    i++
} while (i <= numberReceived2_1);


// Excersise 3 
// Taking into account the ringing Bell function, create a loop (the one you consider) that displays a string through the console that in 
// turn concatenates the string that the function returns as many times as the number that the user enters on the keyboard.
// For example, if the user enters the number 5, the result should be:
// Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong
// function RingBell() {
//      console.log("Ding Dong");
//      return "Ding Dong,"
// }
function RingBell() {
    // console.log("Ding Dong");
    return "Ding Dong,"
}

let numberDingDong = +prompt("Enter a number:")

let dingDongsResult = ""

for (let i = 1; i <= numberDingDong; i++) {
    dingDongsResult = dingDongsResult + " " + RingBell()
}

let finalResult = dingDongsResult
console.log(finalResult)


// Excersise 4
// Starting from the constants dateLimit and dates, make a loop (the one you consider) that shows in the console 
// the dates in the array that are greater than or equal to the date stored in the constant dateLimite.
const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for (let i = 0; i < dates.length; i++) {
    if (dates[i] >= dateLimit){
        console.log(dates[i])
    }
}


// Excersise 5
// Using a "for of" loop, create an array of strings with colors and print each of the colors included in the array through the console.
// In the console it should look like this (for example):
// Red
// Green
// Blue
// Violet
// Brown
// Black
// White
let colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"]

for (const color of colors) {
    console.log(color)
}

for (const color of colors) {
    console.log(colors[2])
}


// Excersise 6
// Now take the loop from the previous exercise as a reference and place it inside a function so that it performs the same task but
// can be reused as many times as necessary without having to rewrite the loop code.
function printArrays(array) {
    for (const position of array) {
        console.log(position)
    }
}

let colorsSpanish = ["Rojo", "Verde", "Azul", "Violeta", "Marron", "Negro", "Blanco"]

printArrays(colorsSpanish)


// Excersise 7
// Using a "for of" loop, create an array with 5 numbers and make a program that runs through 
// that array and displays the double of each of the elements, in the console.
// In the console it should look like this:
// the number is 5 and its double is 10
// the number is 7 and its double is 14
// the number is 1 and its double is 2
// the number is 3 and its double is 6
// the number is 50 and its double is 100
let numbersArray = [3, 5, 15, 25, 50]

function doubleNumbersArray(array) {
    for (const position of array) {
        console.log(`The number is ${position} and its double is ${position * 2}`)
    }
}

doubleNumbersArray(numbersArray)


// Excersise 8
// Using the loop that you think is correct, create an array with at least 4 objects with 4 properties, each of those created objects must represent a member of a family group
// (they can be fictitious people).
// Then make a program (by saying program the intention is that it is not just the loop, but rather a function that contains the loop) 
// that displays a presentation message for each element of the array through the console.
// In the console it should look like the example.
// Hello, I am María Lopez (mother) and I am 40 years old.
// Hello, I am Juan Perez (father) and I am 38 years old.
// Hello, I am Romina Perez (daughter) and I am 13 years old.
// Hello, I am Tomás Perez (son) and I am 10 years old.
// Object Model
// {name: 'Juan', last-name: 'Perez', age: 38, member: 'father'}
// Tip! use backticks for this.
let family = [
    {
        name: "Horacio",
        lastName: "Varoli",
        age: 75,
        member: "Father"
    },
    {
        name: "Vilma",
        lastName: "Pons",
        age: 70,
        member: "Mother"
    },
    {
        name: "Tatiana",
        lastName: "Varoli",
        age: 43,
        member: "Daughter"
    },
    {
        name: "Daniel",
        lastName: "Varoli",
        age: 39,
        member: "Son"
    },
    {
        name: "Fernando",
        lastName: "Varoli",
        age: 40,
        member: "Son"
    }
]

function presentation(array) {
    for (const position of array) {
        console.log(`Hello, I am ${position.name} ${position.lastName} (${position.member}) and and I am ${position.age} years old`)
    }
}

presentation(family)


// Difficulty Level: High
// Excersise 1
// Using the loop that you consider, create a program that allows the entry of numbers on the screen through a prompt and
// calculates the sum of the even numbers on the one hand and
// the odd numbers on the other.
// The data entry ends when the user enters a 0. 
// In the console it should look like this (for example):
// Even number: 38
// Odd numbers 30
function sumPairsAndOdds(){
    let SumOfPairs = 0
    let SumOfOdds = 0

    while (true) {
        let enteredNumber = Number(prompt(`Enter a number, even or odd, or 0 to finish.`))
        if (enteredNumber == 0){
            break;
        }
        if (enteredNumber % 2 == 0){
            SumOfPairs += enteredNumber
        } else if (enteredNumber % 2 != 0){
            SumOfOdds += enteredNumber
        } else {
            console.log(`Invalid numbers`)
        }
    }
    console.log(`Sum of even numbers is equal to ${SumOfPairs}`)
    console.log(`Sum of odd numbers is equal to ${SumOfOdds}`)
}

sumPairsAndOdds()


// Excersise 2
// Using the loop that you think is correct, create an array of 10 numbers and make a program that prints the largest number in the array, on the screen.
let randomNumbers = [79, 1, 5, 35, 50, 108, 49, 27, 80, 78]

function largestNumber(array){
    let largest = array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i] > largest){
            largest = array[i]
        }
        
    }
    console.log(`The largest number is: ${largest}`)
}

largestNumber(randomNumbers)




