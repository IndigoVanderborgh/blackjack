
let firstCard = 4
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
let isAlive = true // bust variable, left false until bust is reached 
let message = "" // message is already set

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Blackjack! 🥳"
        hasBlackJack = true // now the variable is true
    } else {
        message = "Bust! 😭"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
    console.log(message)
}