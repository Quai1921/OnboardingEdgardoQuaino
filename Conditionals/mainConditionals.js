console.log(`Starting javascrip`)

// Difficulty Level: Low
// Exercise 1
// Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, 
// if so, print the value of num1 via the console, otherwise print num2.
// let num1 = 4
// let num2 = 5
let num1 = 4
let num2 = 5

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// Exercise 2
// Based on exercise 1, now modify the block as follows:
// If num1 is greater than num2, print num1 through the console,
// if num2 is greater, print num2 and finally
// if they are equal, print a string that says “The numbers are equal ”
if (num1 > num2) {
    console.log(num1)
} else if (num1 == num2) {
    console.log(`The numbers are equal`)
} else {
    console.log(num2)
}


// Exercise 3
// Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, if so, 
// print a string through the console “The numbers are equal”, otherwise “The numbers are different”
if (num1 == num2) {
    console.log(`The numbers are equal`)
} else {
    console.log(`The numbers are different`)
}


// Exercise 4
// Starting from the following example, create a conditional block that evaluates whether one of these variables is greater 
// than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”
// Tip! Use backticks to print via console.
// let date1 = "2018-9-2"
// let date2 = "2023-7-5"
// The date 2023-7-5 is greater than the date 2018-9-2
let date1 = "2018-09-02"
let date2 = "2023-07-05"

if (date2 > date1) {
    console.log(`The date ${date2} is greater than ${date1}`)
} else if (date2 == date1){
    console.log(`The dates are the same`)
} else {
    console.log(`The date ${date1} is greater than ${date2}`)
}


// Exercise 5
// Now try changing the value of the variables. As in the previous exercises, a string must be printed through
// the console that says if date 1 is greater than date 2 or the opposite.
// Tip! Investigate how the strings compare.
let date3 = "2025-10-02"
let date4 = "2025-09-02"

if (date3 > date4) {
    console.log(`The date ${date3} is greater than ${date4}`)
} else if (date3 == date4){
    console.log(`The dates are the same`)
} else {
    console.log(`The date ${date4} is greater than ${date3}`)
}


// Exercise 6
// In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest.
// Print a string through the console that says “The number [ ] is the largest”
// Tip! Use backticks to print via console.
// let number1 = 5
// let number2 = 7
// let number 3 = 9
let number1 = 5
let number2 = 7
let number3 = 9

if (number1 > number2 && number1 > number3) {
    console.log(`The number ${number1} is the largest`)
} else if (number2 > number1 && number2 > number3) {
    console.log(`The number ${number2} is the largest`)
} else if (number3 > number1 && number3 > number2){
    console.log(`The number ${number3} is the largest`)
} else {
    console.log(`The numbers are equals`)
}

// USANDO MATH

console.log(`The number most largest is ${Math.max(5, 7, 9)}`)


// Difficulty Level: Medium
// Exercise 1
// Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. And print on the screen in each case:
// red: “The color of passion”
// blue: “The color of the sea.”
// green: “The color of nature”
let color = "blue"
switch (color) {
    case "red":
        console.log(`The color of passion`)
        break;
    case "blue":
        console.log(`The color of the sea`)
        break;
    case "green":
        console.log(`The color of nature`)
        break;
    default:
        console.log(`Not is a color`)
        break;
}


// Exercise 2
// Using a switch, create a program that allows you to enter on the screen: 
// two numerical values (number from 1 to 100)
// an operation (addition, subtraction, multiplication, division)
// and print on the screen in each case:
// sum: first value + the second
// subtraction: first value - the second
// multiplication: first value * second
// division: first value / second
// With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
// Tip! Don't forget the break statement


let value1 = Number(prompt(`Enter the first number (between 1 and 100)`))
let value2 = Number(prompt(`Enter the second number (between 1 and 100)`))
let operation = prompt(`Enter the operation (addition, substraction, multiplication, division)`)

if (value1 < 1 || value1 > 100 || value2 < 1 || value2 > 100 || isNaN(value1) || isNaN(value2)) {
    console.log(`Please, enter numbers between 1 a 100.`)
} else {
    switch (operation) {
        case "addition":
            console.log(`The addition of ${value1} and ${value2} is: ${value1 + value2}`)
            break;
        case "substraction":
            console.log(`The substraction of ${value1} and ${value2} is: ${value1 - value2}`)
            break;
        case "multiplication":
            console.log(`The multiplication of ${value1} and ${value2} is: ${value1 * value2}`)
            break;
        case "division":
            console.log(`The division of ${value1} and ${value2} is: ${value1 / value2}`)
            break
        default:
            console.log(`Invalid operation`)
            break;
    }
}

// VERIFICAR CON typeof EL TIPO DE DATO RESULTANTE


// Exercise 3
// Starting from the following structure, create a conditional block that
// receives 2 objects representing people with the properties: name, age, height
// and print by console in the same console.log:
// Which of the two people is the taller?
// Which is the oldest?
// Tip! You can use nested if or logical operators.
// let person = {
//        name = Juan,
//        age = 39,
//        height = 1.69
// }
// Example Result: "Juan is taller and older than Rosa"
let personJuan = {
    name: "Juan",
    age: 39,
    height: 1.69
}

let personRosa = {
    name: "Rosa",
    age: 45,
    height: 1.63
}

if (personJuan.height > personRosa.height && personJuan.age > personRosa.age) {
    console.log(`${personJuan.name} is taller and older than ${personRosa.name}`)
} else if (personJuan.height < personRosa.height && personJuan.age < personRosa.age) {
    console.log(`${personRosa.name} is taller and older than ${personJuan.name}`)
} else if (personJuan.height > personRosa.height && personJuan.age < personRosa.age) {
    console.log(`${personJuan.name} is taller than ${personRosa.name}, but ${personRosa.name} is older than ${personJuan.name}.`)
} else if (personJuan.height < personRosa.height && personJuan.age > personRosa.age) {
    console.log(`${personRosa.name} is taller than ${personJuan.name}, but ${personJuan.name} is older than ${personRosa.name}. `)
} else if (personJuan.height == personRosa.height && personJuan.age < personRosa.age) {
    console.log(`${personJuan.name} is the same height as ${personRosa.name}, but ${personRosa.name} is older in age.`)
} else if (personJuan.height == personRosa.height && personJuan.age > personRosa.age) {
    console.log(`${personJuan.name} is the same height as ${personRosa.name}, but ${personJuan.name} is older in age.`)
} else if (personJuan.height > personRosa.height && personJuan.age == personRosa.age) {
    console.log(`${personJuan.name} is the same age as ${personRosa.name}, but ${personJuan.name} is taller`)
} else if (personJuan.height < personRosa.height && personJuan.age == personRosa.age) {
    console.log (`${personJuan.name} is the same age as ${personRosa.name}, but ${personRosa.name} is taller`)
} else {
    console.log(`${personJuan.name} is the same height and age as ${personRosa.name}.`)
}


// OTRA SOLUCION / CON IF
if (personJuan.height > personRosa.height) {
    console.log(personJuan.name + " it is taller..");
} else if (person1.height < person2.height) {
    console.log(personRosa.name + " it is taller..");
} else {
    console.log("Both people have the same height.");
}

if (personJuan.age > personRosa.age) {
    console.log(personJuan.name + " it is older.");
} else if (personJuan.age < personRosa.age) {
    console.log(personRosa.name + " it is older.");
} else {
    console.log("Both people are the same age.");
}

// OTRA SOLUCION / CON SWITCH
switch (true) {
    case personJuan.height > personRosa.height:
        console.log(personJuan.name + " it is older.");
        break;
    case personJuan.height < personRosa.height:
        console.log(personRosa.name + " it is older.");
        break;
    default:
        console.log("Both people have the same height.");
}

switch (true) {
    case personJuan.age > personRosa.age:
        console.log(personJuan.name + " it is older.");
        break;
    case personJuan.age < personRosa.age:
        console.log(personRosa.name + " it is older.");
        break;
    default:
        console.log("Both people are the same age.");
}


// Exercise 4
// Create a program that allows you to enter on the screen:
// your name, age, height and vision.
// and print through the console a string “You are qualified to drive”,
// For this the person must:
// Be at least 18 years old.
// Measure more than 110 cm.
// Have a vision of at least 8 out of 10.
// Tip! Remember prompt( ) to enter data on the screen.
let nameperson = prompt(`Enter your name:`)
let age = Number(prompt(`Enter your age:`))
let heigth = Number(prompt(`Enter your heigth (in cm):`))
let vision = Number(prompt(`Enter your vision:`))

if (age >= 18 && heigth >= 110 && vision >= 8) {
    console.log(`You are qualified to drive.`)
} else if (!isNaN(age) || !isNaN(heigth) || !isNaN(vision)){
    console.log(`Invalid data entered.`)
} else {
    console.log (`Sorry ${nameperson}. You are not qualified to drive.`)
}


// Exercise 5
// Create a program that allows you to enter your age on the screen and print it on the screen if you are:
// infant (0 to 12 years)
// adolescent (13 to 18 years old)
// older young (19 to 45 years)
// elderly (over 45 years)
// Is he really that old? (more than 100 show)
// Tip! Remember alert( ) to display data on the screen.
let dataAge = prompt(`Enter your age, please:`)

if (dataAge >= 0 && dataAge <= 12){
    console.log(`Infant`)
} else if (dataAge >= 13 && dataAge <= 18){
    console.log(`Adolescent`)
} else if (dataAge >= 19 && dataAge <= 45) {
    console.log(`Older young`)
} else if (dataAge >= 46 && dataAge <= 99) {
    console.log(`Elderly`)
} else if (dataAge >= 100) {
    console.log(`Is he really that old?`)
} else {
    console.log(`Invalid number`)
}

// USANDO SWITCH
let edadIngersada = prompt(`Enter your age, please:`)

switch (true) {
    case (edadIngersada >= 0 && edadIngersada <= 12):
        console.log(`Infant`)
        break;
    case (edadIngersada >= 13 && edadIngersada <= 18):
        console.log(`Adolescent`)
        break;
    case (edadIngersada >= 19 && edadIngersada <= 45):
        console.log(`Older young`)
        break;
    case (edadIngersada >= 46 && edadIngersada <= 99):
        console.log(`Elderly`)
        break;
    case (edadIngersada >= 100):
        console.log(`Is he really that old?`)
        break;
    default:
        console.log(`Invalid number`)
        break;
}


// Exercise 6
// Create a program that allows you to enter only numbers from 1 to 3 on the screen and then any other numerical data. Print on screen:
// 1: “The number entered is [ ]”
// 2: “Twice the number entered is [ ]”
// 3: “Three times the number entered is [ ]”
// another: “That value is not allowed”
// Tip! Remember alert( ) to display data on the screen.
let numberDigited = +prompt(`Enter a number please (between 1 and 3):`)

if (numberDigited >= 1 && numberDigited <= 3) {
    console.log(`1. The number entered is: ${numberDigited}`)
    console.log(`2. Twice the number entered is ${numberDigited * 2}`)
    console.log(`3.Three times the number entered is ${numberDigited *3}`)
} else {
    console.log(`That value is not allowed`)
}


// USANDO SWITCH
let numEntered = Number(prompt(`Enter a number please (between 1 and 3):`))

switch (numEntered) {
    case 1:
        console.log(`1: The number entered is: ${numEntered}`);
        console.log(`2: Twice the number entered is ${numEntered * 2}`);
        console.log(`3: Three times the number entered is ${numEntered * 3}`);
        break;
    case 2:
        console.log(`1: The number entered is: ${numEntered}`);
        console.log(`2: Twice the number entered is ${numEntered * 2}`);
        console.log(`3: Three times the number entered is ${numEntered * 3}`);
        break;
    case 3:
        console.log(`1: The number entered is: ${numEntered}`);
        console.log(`2: Twice the number entered is ${numEntered * 2}`);
        console.log(`3: Three times the number entered is ${numEntered * 3}`);
        break;
    default:
        console.log("That value is not allowed");
        break;
}

// Difficulty Level: High
// Exercise 1
// Create a program that allows the following data to be entered on the screen:
// Customer name, Pass (vip or normal), Entrance (yes or no).
// People who have your name ==> show a welcome message
// or VIP pass ==> show a welcome message
// If you have a ticket, ask if you want to use it
// If affirmative ==> show a welcome message
// If negative ==> show farewell message
// And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
// negative ==> show farewell message
// affirmative ==> ask for available money, in case:
// More than 1000 ==> show a successful sale and welcome message
// Less than 1000 ==> show sales rejection message
let customerName = prompt(`Enter your name:`)
let pass = prompt(`It has a pass? (VIP or none):`)
let hasEntrance = prompt("Do you have a ticket? (yes o no):")

if (customerName == "Edgardo" || pass.toLowerCase() == "vip") {
    console.log(`Welcome ${customerName}`)
} else if (hasEntrance.toLowerCase() == "yes"){
    let useTicket =  prompt("Do you want to use the ticket?? (yes or no)");
    if (useTicket.toLowerCase() == "yes") {
        console.log(`Welcome ${customerName}`)
    } else {
        console.log(`Ok. Bye ${customerName}`)
    }
} else {
    let wantToBuy = prompt("Do you want to buy? (yes or no)");

    switch (wantToBuy.toLowerCase()) {
        case "no":
            console.log(`Thanks. Bye ${customerName}`)
            break;
        case "yes":
            let availableMoney = Number(prompt("Enter the amount of available money"))
            if (availableMoney >= 1000) {
                console.log(`Successful purchase. Welcome ${customerName}`);
            } else {
                console.log("Purchase rejected.");
            }
            break;
        default:
            console.log("Invalid operation.");
    }
}


