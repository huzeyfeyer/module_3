
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Console } from 'node:console';
const userInput = readline.createInterface({ input, output });


let number = parseInt(await userInput.question('Geef een getal in: '));

if(number < 0 ){
    console.log('Negatieve getallen kunnen geen priemgetallen zijn')
}
else if(number == 0 || number == 1 ){
    console.log('0 en 1 zijn geen priemgetallen ')
}
else if(number == 2 ){
    console.log('2 is priemgetal')
}
else{
    let divisor = 0
    for(let i = 2; i < number ; i++){

        if (number % i == 0){
        divisor = i
        break
        }
    }

    if(divisor == 0 ){

    console.log(`${number} is een priemgetal. `)
    }else{
        console.log(`${number} is geen priemgetal. `)

    }

}
    
process.exit()


