let acumulated4 = 0
do {
    numberReceived4 = Number(prompt(`Enter a number or 0 to finish.`))
    acumulated4 += numberReceived4
} while (numberReceived4 !== 0 && !isNaN(numberReceived4));
    console.log(`The operation has been completed. The result is: ${acumulated4}`);

