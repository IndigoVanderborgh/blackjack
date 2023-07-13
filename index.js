
let firstCard = 4
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
let isAlive = true // bust variable, left false until bust is reached 


let message = ""
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Blackjack! 🥳"
    hasBlackJack = true // now the variable is true
} else {
    message = "Bust! 😭"
    isAlive = false
}

console.log(message)