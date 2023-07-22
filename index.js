
let firstCard = 4
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
let isAlive = true // bust variable, left false until bust is reached 
let message = "" // message is already set
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
// Additional knowledge: using query, we can mimic line 10 but point broadly to the id.
// Hashtag uses id, class uses dot.
// let sumEl = document.querySelector("#sum-el")
// let sumEl = document.querySelector(".sum-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumElEl.textContent = "Sum: " + sum
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
