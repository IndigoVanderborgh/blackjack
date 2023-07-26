let firstCard = 10
let secondCard = 4
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
let isAlive = true // bust variable, left false until bust is reached 
let message = "" // message is already set
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// Additional knowledge: using query, we can mimic line 10 but point broadly to the id.
// Hashtag uses id, class uses dot.
// let sumEl = document.querySelector("#sum-el")
// let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
// -----------------------------------------------------



function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Blackjack! 🥳"
        hasBlackJack = true // now the variable is true
    } else {
        message = "Bust! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 6
    sum += card
    startGame()
}

