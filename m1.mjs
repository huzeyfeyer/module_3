import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let number
let result = 0

do{
number = parseFloat( await userInput.question(' Geef een getal in: '))
if(number > 0 ){
    result += number
}
}while(number > 0);
   


//console.log('Optellen = ' + result )

console.log(` Optellen = ${result} `) 


process.exit()
