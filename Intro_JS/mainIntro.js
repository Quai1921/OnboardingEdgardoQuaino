console.log("Starting javascrip")

// Difficulty Level: Low
// Exercise 1
// Create a variable called myName and store your first name in it:
// In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "Rose". 
// Then add a line of code to print the variable name to the console after the previous message. 
// Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. 
// If not, investigate and fix (do this step for the next exercises too)
const myName = "Edgardo"
console.log(`My name is ${myName}` )


// Exercise 2
// Create a variable called myLastName and store your last name in it.
const myLastName = "Quaino"
console.log(`My last name is ${myLastName}` )


// Exercise 3
// Create a variable called myAge and save your age in it. 
// Tip! Do not use string quotes for numbers.
let myAge = 41
console.log(`I am ${myAge} years old`)


// Exercise 4
// Create a variable called myPet and save the name of your pet in it. If you don't have a pet, you can invent a name.
const myPet = "Timon"
console.log(`My dog name is ${myPet}`)


// Exercise 5
// Create a variable called petAge and save the pet's age in it.
// (As in the previous case, you can invent this number if you don't have a pet).
let petAge = 5
console.log(`My dog is ${petAge} year old`)


// Exercise 6
// Create a variable called fullName and store the concatenation of myFirstName and myLastName in it.
let fullName = `${myName} ${myLastName}`
let fullName2 = myName + " " + myLastName
console.log(`My name is ${fullName}`)
console.log(`My name is ${fullName2}`)


// Exercise 7
// Create a variable called Presentationtext and save in it a text comprised of all the variables created so far.
presentationText = `Hello, my name is ${myName} ${myLastName}. I am ${myAge} years old. I have a dog named ${myPet}, and he is ${petAge} years old.`
console.log(presentationText)


// Difficulty Level: Medium
// Exercise 1
// Create a variable sumAges, subtractAges, productAges, divisionAges and calculate their respective operations with the variables myAge and agePet.
sumAges = myAge + petAge
console.log(`The result is: ${sumAges}` )

subtractAges = myAge - petAge
console.log(`The result is: ${subtractAges}` )

productAges = myAge * petAge
console.log(`The result is: ${productAges}` )

divisionAges = myAge / petAge
console.log(`The result is: ${divisionAges}` )


// Exercise 2
// Create an object called student with a minimum of 5 properties, display said object using console.table( ) and also 
// display each of the object's properties separately through the console.
let student = {
    name: "Edgardo",
    age: 41,
    identification: 29374131,
    address: "Bahía Blanca 210, La Falda",
    email: "equaino.i@gmail.com"
}
console.table(student)
console.log(student.name)
console.log(student.age)
console.log(student.identification)
console.log(student.address)
console.log(student.email)


// Exercise 3
// Create an object called pet with a minimum of 5 properties, display said object using console.table( ) and also 
// display each of the object's properties separately through the console.
let pet = {
    name: "Timon",
    age: 5,
    fur: "Black",
    favoriteFood: "Grilled meat",
    hobby: "Walk"
}
console.table(pet)
console.log(pet.name)
console.log(pet.age)
console.log(pet.fur)
console.log(pet.favoriteFood)
console.log(pet.hobby)

// Exercise 4
// Create an array called fruits with a minimum of 5 elements and display the entire array in the console and also 
// display each of the elements separately in the console.
let fruits = ["Apples", "Pears", "Bananas", "Peaches", "Watermelons"]
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])


// Difficulty Level: High
// Exercise 1
// Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save 
// the result in a variable called IamAdult and display a message in the console that says:
// "I am an adult" (and the value of the variable).

let iAmAdult = prompt("Enter your age:")
// console.log(iAmAdult)

if (iAmAdult >= 18) {
    console.log (`I am an Adult. I am ${iAmAdult} years old`)
} else if (isNaN(iAmAdult) || iAmAdult <= 0){
    console.log(`Invalid number`)
}else {
    console.log(`I am not an Adult. I am ${iAmAdult} years old`)
}


// Exercise 2
// Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console.
let numbers = [10, 19, 21, 35, 60]
console.table(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])


// Exercise 3
// Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console.
let family = [
    {
        name: "Horacio",
        age: 65,
    },
    {
        name: "Alejandra",
        age: 63
    },
    {
        name: "Lucas",
        age: 38
    },
    {
        name: "María",
        age: 32
    },
    {
        name: "Marta",
        age: 84
    }
]

console.table(family)
console.log (family[0])
console.log (family[1])
console.log (family[2])
console.log (family[3])
console.log (family[4])
console.log (family[1].name)
console.log (family[4].age)


// Exercise 4
// Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element 
// at numbers array and the first property of the fifth object of the family array.
let randomText = `The ${fruits[1]} i bought were ${numbers[3]}, just like the ones ${family[4].name} bought.`
console.log(randomText)