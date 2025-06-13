let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")

let scoreHome = 0
let scoreGuest = 0

function add1Home() {
    scoreHome += 1
    score1El.textContent = scoreHome
}

function add2Home() {
    scoreHome += 2
    score1El.textContent = scoreHome
}

function add3Home() {
    scoreHome += 3
    score1El.textContent = scoreHome
}

function add1Guest() {
    scoreGuest += 1
    score2El.textContent = scoreGuest
}

function add2Guest() {
    scoreGuest += 2
    score2El.textContent = scoreGuest
}

function add3Guest() {
    scoreGuest += 3
    score2El.textContent = scoreGuest
}


function reset() {
    scoreHome = 0
    scoreGuest = 0
    score1El.textContent = scoreHome
    score2El.textContent = scoreGuest
}