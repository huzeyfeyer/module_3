import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let num1 = parseFloat(await userInput.question('Geef het eerste getal in: '));
let num2 = parseFloat(await userInput.question('Geef het tweede getal in: '));


while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;  
    num1 = temp;
}

console.log(`De grootste gemene deler is: ${num1}`);


process.exit();
