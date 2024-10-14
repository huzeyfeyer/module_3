import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let limit = parseFloat(await userInput.question('Geef de getal in: '));
let first = 0
let second = 1
let fibonacci = 0
let line = "0, 1, "


while(fibonacci < limit ){

    fibonacci = first + second
    first = second
    second = fibonacci

    line += fibonacci
    line += ", "
   

}


console.log(line)
process.exit()

