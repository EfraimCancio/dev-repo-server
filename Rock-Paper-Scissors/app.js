const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genarationComputerChoice();
    getResult();
}));

const genarationComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'Pedra'
    }
    if (randomNumber === 2) {
        computerChoice = 'Papel'
    }
    if (randomNumber === 3) {
        computerChoice = 'Tesoura'
    }

    computerChoiceDisplay.innerHTML = computerChoice 
};

const getResult = () => {
    if (computerChoice === userChoice) {
        result = 'Empatou!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Papel') {
        result = 'Ganhou!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Tesoura') {
        result = 'Perdeu!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Tesoura') {
        result = 'Ganhou!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Pedra') {
        result = 'Perdeu!!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Pedra') {
        result = 'Ganhou!!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Papel') {
        result = 'Perdeu!!'
    }
    
    resultDisplay.innerHTML = result

};