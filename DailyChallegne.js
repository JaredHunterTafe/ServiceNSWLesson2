const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){

let myArray = [];
while(true) {
    let userInput = await askQuestion("input a number between 1 and 5 ");
    for(let i= 0; i < myArray.length; i++)
        if(myarray[i] == userInput){
            break;
                }

myArray.push(userInput);
    
console.log(myArray);
}
}

Program().then(() => {
    process.exit(0);
});
