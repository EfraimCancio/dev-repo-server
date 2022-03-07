const cardArray = [
    {
        name: 'mario',
        img: 'images/mario.png',
    },
    {
        name: 'bowser',
        img: 'images/bowser.png',
    },
    {
        name: 'yoshi',
        img: 'images/yoshi.png',
    },
    {
        name: 'luigi',
        img: 'images/luigi.png',
    },
    {
        name: 'koopa-troopa',
        img: 'images/koopa-troopa.png',
    },
    {
        name: 'goomba',
        img: 'images/goomba.png',
    },
    {
        name: 'mario',
        img: 'images/mario.png',
    },
    {
        name: 'bowser',
        img: 'images/bowser.png',
    },
    {
        name: 'yoshi',
        img: 'images/yoshi.png',
    },
    {
        name: 'luigi',
        img: 'images/luigi.png',
    },
    {
        name: 'koopa-troopa',
        img: 'images/koopa-troopa.png',
    },
    {
        name: 'goomba',
        img: 'images/goomba.png',
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

const createBoard = () => {
    for (let i = 0 ; i < cardArray.length;  i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/king-boo.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    };
};

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
    if (optionOneId == optionTwoId) {
        alert('Deu Bom!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src' , 'images/life.png')
        cards[optionTwoId].setAttribute('src' , 'images/life.png')
        cards[optionOneId].removeEventListener('click' , flipCard)
        cards[optionTwoId].removeEventListener('click' , flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src' , 'images/king-boo.png')
        cards[optionTwoId].setAttribute('src' , 'images/king-boo.png')
        alert('Sorry... Não deu bom!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulatios!!! Voçê é o Bichão mesmo hein?!!'
    }

}

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500 )
    }
}


// console.log(cardArray);