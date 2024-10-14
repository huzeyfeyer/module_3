import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let hoogte = parseFloat(await userInput.question('Geef de hoogte in: '));
let l = (hoogte + 1) / 2
let i = 1;

while (i <= l) {
    let line = '';
    let j = 1;

    
    while (j <= l - i) {
        line += ' ';
        j++;
    }

    
    let k = 1;
    while (k <= (2 * i) - 1) {
        line += '*';
        k++;
    }

    console.log(line);
    i++;
}


i = 1
while (i <= l - 1) {
    let line = '';
    let j = 1;

    
    while (j <= i ) {
        line += ' ';
        j++;
    }

    
    let k = 1;
    while (k <= (hoogte - (2 * i) )) {
        line += '*';
        k++;
    }

    console.log(line);
    i++;
}


process.exit()

 



