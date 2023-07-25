/* Is Truthy */
let num = null;
if (num) {
    console.log("true")
} else if (num === 0) {
    console.log("The number 0 is falsy")
} else if (num === false) {
    console.log("The boolean value false is falsy")
} else if (num === null) {
    console.log("The null value is falsy")
} else if (num === undefined) {
    console.log("undefined is falsy")
} else {
    console.log("The empty string is falsy (the only falsy string)")
}

/******************************************************************************/

/* Number Line */
let numOne = 55;
let numTwo = 55;
let sum = numOne + numTwo;

if (sum < -1000) {
    console.log(`${sum} is less than -1000.`)
} else if (sum < 0) {
    console.log(`${sum} is a negative number.`)
} else if (sum === 0) {
    console.log(`${sum} is equal to 0.`)
} else if (sum > 0 && sum <= 100) {
    console.log(`${sum} is larger than 0.`)
} else if (sum > 100) {
    console.log(`${sum} is greater than 100.`)
}

/******************************************************************************/

/* Greater than 5 */
let num1 = 0;
let num2 = 0;

if (num1 >= 5 && num2 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

/******************************************************************************/

/* Pair and Compare */
let param1A = "five";
let param1B = 5;
let param2A = "dog";
let param2B = "dawg";

if ((param1A === param1B)||(param2A === param2B)) {
    console.log(true);
} else {
    console.log(false);
}