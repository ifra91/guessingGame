let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: 'per',
    chips: 200
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}



function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards : ";

    for (i = 0; i <= cards.length - 1; ++i) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum : " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true;
    } else if (sum === 21) {
        message = "You've got a BlackJack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        startGame();
    }
}