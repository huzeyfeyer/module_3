import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });



let total = 0
let count = 0 
let average = 0

while(average <= 25){
    
    let num = parseFloat(await userInput.question('Geef de getal in: '));

    total += num
    count += 1
    average = total / count

    console.log(`Lopende gemiddelde: ${average}`)

}

console.log(" Het gemiddelde is boven 25.")


process.exit()

 



