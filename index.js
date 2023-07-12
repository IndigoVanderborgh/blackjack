
let firstCard = 4
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
let isAlive = true // bust variable, left false until bust is reached 
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Blackjack! 🥳")
    hasBlackJack = true // now the variable is true
} else {
    console.log("Bust! 😭")
    isAlive = false
}

// 3. Log it out!
