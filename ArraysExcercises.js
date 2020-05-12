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
    let students = [];

    let userInput = await askQuestion ("Please Enter Your name ");
     students.push(userInput);

    
                     
    console.log(students)
    
    
}


Program().then(() => {
    process.exit(0);
});
