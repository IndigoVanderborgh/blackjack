let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false // starts the play sensing that you dont have blackjack yet
let isAlive = false // varibale denoting whether we "entered" the casino ie start game 
let message = "" // message is already set
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// Additional knowledge: using query, we can mimic line 10 but point broadly to the id.
// Hashtag uses id, class uses dot.
// let sumEl = document.querySelector("#sum-el")
// let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
// -----------------------------------------------------

// Make this function return a random number between 1 and 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() { // merged with variables on line 31, 32 and 33 from variables before
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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

// broken now, can continuesly draw cards past bust. going to use the logical operator AND
function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // push the new card to the card array
        cards.push(card)
        renderGame()
    }
}

