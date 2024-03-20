import inquirer from "inquirer";
// const answer = await inquirer.prompt([
//     {
//         type: `input`,      //input used for string
//         name: `yourname`,
//         message: `what is you name?`
//     }
// ])
// console.log(`Your name is ` + answer.yourname);
// const myNmber = await inquirer.prompt([
//     {
//         type: `number`,
//         name: `yournumber`,
//         message: `enter number`
//     }
// ])
// console.log(`Your number is ` + myNmber.yournumber);
// console.log(typeof myNmber.yournumber);
//Example of power of a number;
// const myNmber = await inquirer.prompt([
//     {
//         type: `number`,
//         name: `yournumber`,
//         message: `enter number to gets its square`
//     }
// ])
// let num1 = myNmber.yournumber;
// console.log(`square of ${num1} is ${num1*num1}`); //second method ${Math.pow(num1,5)} 5 or any power you can use
//Example multiplication of two number;
const myNmber = await inquirer.prompt([
    {
        type: `number`,
        name: `number1`,
        message: `enter 1st number`
    },
    {
        type: `number`,
        name: `number2`,
        message: `enter other number`
    }
]);
let value1 = myNmber.number1;
let value2 = myNmber.number2;
console.log(`The product of your number is ${value1 * value2}`);
