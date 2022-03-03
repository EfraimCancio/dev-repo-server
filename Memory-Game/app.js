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
const cardsChosen = [];
const cardsChosenIds = [];

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

    console.log('Checar se são iguais')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('CArtas iguais')
        cards[cardsChosenIds[0]].setAttribute('src' , 'images/egg.png')
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500 )
    }
}


// console.log(cardArray);