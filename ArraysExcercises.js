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
    let students = ["Christine", "Dave", "Haley"];

    let userInput1 = await askQuestion ("Please Enter Your name ");
    let nameInput = parseInt(userInput1);

    students.push(nameInput);

    
                     
    console.log(students)
    
    
}


Program().then(() => {
    process.exit(0);
});
