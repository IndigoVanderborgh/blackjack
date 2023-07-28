let firstCard = 10
let secondCard = 4
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
    // push the card to the cards array
    cards.push(card)
    startGame()
}

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}



// Still learning about arrays; loops and for. placeholder text for now



// learning about arrays/counting this is a placeholder text until i can continue.
// mostly learning about for loops.