import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let row = ' '
for(let i = 0 ; i <=  21 ; i += 2 ){
    row += i + ' '
}
console.log(row)

    
process.exit()
