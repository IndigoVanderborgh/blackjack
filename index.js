
let firstCard = 4
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Blackjack! 🥳")
    hasBlackJack = true // now the variable is true
} else {
    console.log("Bust! 😭")
    isAlive = false
}

// 3. Log it out to check that you're doing it right
console.log(isAlive)