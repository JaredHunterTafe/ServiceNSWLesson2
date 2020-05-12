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
    //Question 1
// let userInput1 = await askQuestion ("Please Enter a Number");
// let number1 = parseInt(userInput1);
// let userInput2 = await askQuestion ("Please Enter another Number");
// let number2 = parseInt(userInput2);

// if(userInput1 >= userInput2) {
//     console.log(userInput1 + " is the greater number");
//   } else {
//     console.log(userInput2 + " is the greater number");
//   }


    //Question 2
// let userInput1 = await askQuestion ("Please Enter a Number");
// let number1 = parseInt(userInput1);
// let userInput2 = await askQuestion ("Please Enter another Number");
// let number2 = parseInt(userInput2);

// if(userInput1 >= userInput2) {
//     console.log(userInput1 + " " + userInput2);
//   } else {
//     console.log(userInput2 + " " + userInput1);
//   }

    //Question 3
// let userInput1 = await askQuestion ("Please Enter a Number");
// let number1 = parseInt(userInput1);
// let userInput2 = await askQuestion ("Please Enter another Number");
// let number2 = parseInt(userInput2);
    
// if(userInput1 <= userInput2) {
// console.log(userInput1 + " " + userInput2);
// } else {
// console.log(userInput2 + " " + userInput1);
// }

}
Program().then(() => {
    process.exit(0);
});
