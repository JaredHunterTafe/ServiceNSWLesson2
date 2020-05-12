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

    let numberName1 = await askQuestion ("Please Enter a Number 1-5");

    let number1 = parseInt(numberName1);

if  != numbers

let numberName2 = await askQuestion ("Please Enter a Number 1-5");

let number2 = parseInt(numberName2);

else 


    {console.log(numbers[i]);
    }



numbers.push(number1);



console.log (numbers)



  }


Program().then(() => {
    process.exit(0);
});
