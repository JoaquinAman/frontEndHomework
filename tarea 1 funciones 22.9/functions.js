// #1 -> named functions + arrow function
// Create an array of numbers
// create a function  that accepts an array of numbers and returns the average of those numbers

const myNumbers = [1, 2, 3, 4];

const myFunction = (myNumbers) => {
    let average = myNumbers.reduce((a, b) => a + b, 0) / myNumbers.length;
    return average;
}

console.log(myFunction(myNumbers));

// #2  -> named function + arrow function
// Create an array of numbers
// create a function named sumOdds that accepts an array of numbers and 
// returns the sum of the odd numbers (odd numbers -> 1,3,5,etc)

const sumOdds = (myNumbers) => {
    let total = 0;
    for (let index = 0; index < myNumbers.length; index++) {
        if(myNumbers[index] % 2 != 0){
            total += myNumbers[index];
        }
    }
    return total;
}

console.log(sumOdds(myNumbers));

// #4
// Create a function RunOperation that will receive 2 numbers a,b and a function that will perform 
// an operation over a and b
// *The operations you have to implement should be sum, rest, divide and multiply.
// *If operation failed then return 0
// *Every time you run an operation you save the result into an array
// *a ,b are non negative*a,b can be 0

const sumFunction = (a, b) => {
    return a + b;
}
const restFunction = (a, b) => {
    return a - b;
}
const divideFunction = (a, b) => {
    let temp = a / b;
    
    if(isNaN(temp) || temp === Infinity){
        return 0
    }
    return temp;
}
const multiplyFunction = (a, b) => {
    return a * b;
}

let myArray = [];

const RunOperation = (a, b, secondFunction) => {
    let temp = secondFunction(a, b);
    myArray.push(temp);
    return temp;
}

console.log(RunOperation(3, 1, sumFunction));
console.log(RunOperation(3, 1, restFunction));
console.log(RunOperation(0, 0, divideFunction));
console.log(RunOperation(3, 1, multiplyFunction));

console.log(myArray);