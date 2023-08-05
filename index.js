// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "User",
    cash: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.cash

// introduction to objects
// let player = {
//     name: "User",
//     cash: 145
// }


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "Bust! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// problem is when 21 is hit, new card doesn't work.
// potential fix: create new function called restartGame(), to set isAlive function to false
// alongside other variables stated in the beginning.
// tried fixing by putting isAlive = false under line 29, didn't work.