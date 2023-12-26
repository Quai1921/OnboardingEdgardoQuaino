// Difficulty Level: Low
// Exercise 1
// Declaring functions
// This first exercise is for learning how to declare a function. In this case you must declare a named function called "add" that within its body, 
// must execute an instruction that displays the result of 100 x 20 in the console.
function add(){
    let num1 = 100
    let num2 = 20
    let multiplication = num1 * num2
    console.log(multiplication)
}

add()
add()

console.log(add)


// Exercise 2
// Calling/executing functions.
// We already have the declaration, the next step is to call/execute the "add" function. Execute it and check that the result is displayed in the console.
add()


// Exercise 3
// Adding parameters.
// Now it's time to add parameters to our function. Add two parameters and call them whatever you want.
// Remember to indicate within the body of the function where those parameters will go.


function add(num1, num2){
    let multiplication = num1 * num2
    console.log(multiplication)
    return multiplication
}

console.log(add(9,6))


// Exercise 4
// Using arguments.
// We have already added parameters to the declaration of our function, the next step is to "pass it arguments". To do this,  create two variables like the following in the example:
let number1 = 100;
let number2 = 20;

console.log(add(number1, number2))


// Exercise 5
// Adding the <return>.
// With our named function set up correctly, it's time to change the console.log of the function body.
// Create a result variable inside the function body that will store the result of 100 x 20, and have the function returns that variable.
function add(num1, num2){
    let multiplication = num1 * num2
    return multiplication
}

console.log(add(100, 5))

let multiplicationResult = add(15, 5)
console.log(multiplicationResult)


// Exercise 6
// Convert the named function from the previous exercise into an anonymous function and call/execute it
let fnMultiplication = function (num1, num2){
    return num1 * num2
}

console.log(fnMultiplication(20,40))


// Difficulty Level: Medium
// Exercise 1
// Create a named function called "greet" that
// receives a string parameter representing a name, and
// displays a custom greeting using the provided name in the console.
// Call/run the function with your own name to verify that it works correctly.
function greet (string){
    return `Hello ${string}, welcome to MindHub.` 
}

console.log(greet("Nicolas"))


// Exercise 2
// Create an anonymous function that
// receives two numerical parameters and
// returns the result of the multiplication of both.
// Calls/executes the function with two different values and displays the result via console.
const opertationMultiplication = function (num_01, num_02){
    return num_01 * num_02
}

console.log(opertationMultiplication(5, 2))
console.log(opertationMultiplication(20, 2))


// Exercise 3
// Create a named function called "area" that
// receives two numerical parameters, one representing the base and the other the height of a triangle.
// return its area.
function area (base, height){
    return (base * height) / 2
}

console.log(area(20, 30))


// Exercise 4
// Create another named function called "perimeter" that
// receives three numerical parameters that represent each of the sides of a triangle, and
// returns the perimeter of the triangle.
// Tip! Remember the formulas for area and perimeter of triangles.
function perimeter (side1, side2, side3){
    return side1 + side2 + side3
}

console.log(perimeter(20, 30, 60))


// Exercise 5
// Create an function that
// takes two numerical parameters representing the price and quantity of a product,
// and returns the total price of the purchase.
// If the number of products is greater than or equal to 10, ==> a 10% discount applies to the total price.
// If the number of products is greater than or equal to 20, ==> a 20% discount applies to the total price.
// Call/run the function with different price and quantity values to verify it works correctly
function priceTotal (value, quantity){
    let priceFinal = value * quantity

    if(quantity >= 10 && quantity < 20){
        return (priceFinal * 0.9)
    } else if (quantity >= 20 ){
        return (priceFinal * 0.8)
    } else {
        return priceFinal
    }
}

console.log(priceTotal(5, 22)) 


// Exercise 5
// Create a named function called isAnAdult that
// receives a numeric parameter representing the age of a person, and
// returns a message indicating whether the person is an Adult or not.
// If Age is greater than or equal to 18 "You are an adult"
// If Age is less than 18 "You are not an adult"
// Call the function with different age values to verify that it works correctly.
// Call the function with different age values to verify that it works correctly.
function isAnAdult (age){
    if (age >= 18){
        return "You are an adult"
    } else if (isNaN(age)){
        return "Invalid number"
    }
    else {
        return "You are not an adult"
    }
}

console.log(isAnAdult(25))


// Difficulty Level: High
// Exercise 1
// Create a function (declare it as you want) that
// takes a numerical parameter that represents a person's annual income, and
// returns the tax they must pay.
// If Income less than or equal to $10,000, ==> tax of 10% of income.
// If Income greater than $10,000 and less than or equal to $20,000, ==> tax of 15% of income.
// If Income greater than $20,000, ==> tax of 20% of income.
// Use nested conditionals to implement this function.
// Call/execute the function with different input values to verify that it works correctly.
function payableTax (income){

    if (income <= 10000 && income >= 0){
        return income * 0.1
    } else if (income > 10000 && income <= 20000){
        return income * 0.15
    } else if (income > 20000){
        return income * 0.2
    } else {
        return "Invalid amount entered."
    }
}

console.log(payableTax(15000))


// Exercise 2
// Create a function (declare it as you want) to check for a day that
// receives a numerical parameter and
// returns a message indicating whether it is a business day or not.
// If the number is 1, 2, 3, 4, 5, message: "It is a business day."
// If the number is 6 or 7, message: "It's the weekend."
// Use the nested switch control structure to implement this function.
// Call the function with different day values to verify that it works correctly.
function businessDays(dayNumber) {
    switch (dayNumber){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "It is a business day."
            break;
        case 6:
        case 7:
            return "It's the weekend."
            break;
        default:
            return "Invalid date."
    }
}

console.log(businessDays(3))


// Exercise 3
// Create a program using a function (declare it as you want) that takes a parameter that represents Personal Information (enter by keyboard). 
// First the Name must be entered, and
// if it comes empty ==> the program must stop and display a console.error with a message “The name cannot be empty”
// Then the user must be asked to enter the Last Name and it must be validated as the Name in previous step.
// Finally, the user must be asked to enter the age and it must be validated too.
// Once all the data were verified, the function must save all that data in an object with 3 properties: first name, last name and age and display it through the console.
// To finish, the function must be called/executed and tested with different values.
function personalInformation (){
    let firstName = prompt(`Enter your first name:`)
    if (firstName == ""){
        alert("The first name cannot be empty.")
        return
    }

    let lastName = prompt(`Enter your last name:`)
    if (lastName == ""){
        alert("The last name cannot be empty.")
        return
    }

    let personAge = +prompt(`Enter your age:`)
    if (personAge == "" || personAge <= 0 || isNaN(personAge)){
        alert("The age cannot be empty or invalid age.")
        return
    }

    let personalInformation = {
        DateName: firstName,
        DateLastName: lastName,
        DateAge: personAge
    }

    return personalInformation
}

console.log(personalInformation())


// SEPARANDO LAS FUNCIONES
function solicitarDatos() {
    const nombre = prompt(`Ingrese su nombre:`)
    const apellido = prompt(`Ingrese su apellido:`)
    const edad = Number(prompt(`Ingrese su edad:`))

    const datosIngresados = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }

    return datosIngresados
}

function verificarDatosIngresados(nombre, apellido, edad) {
    return nombre != "" && apellido != "" && edad != "" && edad != 0 && !isNaN(edad)
}

function realizarCargaDatos (){
    const datosParaControlar = solicitarDatos()
    const datosValidos = verificarDatosIngresados(datosParaControlar.nombre, datosParaControlar.apellido, datosParaControlar.edad)
    if(datosValidos){
        console.log("Datos ingrsados válidos")
    } else {
        return("Los datos ingresados no cumplen con los requisitos")
    }
    return datosParaControlar
}

const datosFinales = realizarCargaDatos()
console.log(datosFinales)


// SOLUCION CONJUNTA

const nombreIngresado = "Nicolas"

function ejercicio3(nombre) {
    if (nombre != "string" || nombre.length == 0) {
        console.error("The name cannot be empty")
        return
    }
    const apellido = "Cirulli"
    if (apellido != "string" || apellido.length == 0) {
        console.error("The lastname cannot be empty")
        return
    }
    const edad = parseInt("29")
    if (isNaN(edad) || edad <= 0) {
        console.error("The age cannot be empty")
        return
    }
    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,

        presentarse() {
            console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
        }
    }
    persona.presentarse()

    console.log()
}

ejercicio3(nombreIngresado)


// Exercise 4
// Create a program that is made up of 3 functions (declare them as you want):
// 1st greet function: that takes a parameter that represents a name and returns a string “Hello, my name is [ parameter ]”
// 2nd function: calculateAge: which takes two parameters that represent the year of birth and the current year. 
// This function will return the result of the current year minus the year of birth.
// 3rd function: present: call/execute the other two functions and execute an alert with the user's presentation
// The user's data must be entered on the screen and the final result also displayed on the screen
function inputtedData(){
    const nameReceived = prompt(`Enter your name:`)
    const yearBirthReceived = Number(prompt(`Enter your year of birth:`))
    const yearCurrentReceived = Number(prompt(`Enter the current year:`))

    const receivedData = {
        EnteredName : nameReceived,
        ageBirthReceived : yearBirthReceived,
        ageCurrentReceived : yearCurrentReceived
    }

    return receivedData
}

function dataGreet(enteredName){
    return `Hello, my name is ${enteredName}`
}

function calculateAge(yearBirth, curretnYear){
    return curretnYear - yearBirth
}

function present(){
    const nameIntroduction = inputtedData()
    const greet = dataGreet(nameIntroduction.EnteredName)
    const ages = calculateAge(nameIntroduction.ageBirthReceived, nameIntroduction.ageCurrentReceived)
    console.log(`${greet}. I have ${ages} years old. `)
    alert(`${greet}. I have ${ages} years old. `)
}

present()
