const inquirer = require('inquirer');
const answer = Math.ceil(Math.random() * 100);
let count = 5;

const startGame = () => {
    return inquirer
        .prompt([
            {
                type: 'number',
                message: `You have ${count} times to guess the right number! (0-100)`,
                name: 'number',
            }
        ])
        .then( (res) => {
            count--;
            if (res.number > 100 || res.number < 1) {
                console.log('Please, the number should be between 1 and 100!');
            } else if (res.number === answer) {
                console.log('You win');
                return;
            } else if (count <= 0) {
                console.log(`Game over. The number is ${answer}.`);
                return;
            }
            startGame();
        } )
        .catch( err => console.log(err))
}

startGame()