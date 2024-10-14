import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let hoogte = parseInt(await userInput.question('Geef de hoogte in: '));

for(let i = 1 ; i <= hoogte ; i++){
    
    let stars = ''

    for (let j = 1; j <= i; j++) {
        stars += '*';
    }

    console.log(stars)

}

process.exit()
