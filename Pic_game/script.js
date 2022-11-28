'use strict'

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const name0EL = document.querySelector('.name--0');
const name1EL = document.querySelector('.name--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

let score, currentScore, activePlayer, playing;
// Starting conditions

const init = function(){   
    
    currentScore = 0;
    activePlayer = 0;
    score = [0,0];
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");

}
// init();

// Switch Player
const switchingPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// BTNROLL Function
btnRoll.addEventListener('click', function() {
    if(playing){
    // Random dice
    const dice = parseInt(Math.random()*6) +1;
    // console.log(dice);

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;

    // check a roll dice 1: if true, switch new player
    if ( dice !== 1){
        // Add dice to score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;

    }else {
        // Switch the next player
        switchingPlayer()
    }
}
})

// BTNHOLD Function 
 
btnHold.addEventListener("click", function(){
    if(playing){
    // 1. Add a current score to player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    // 2. Check if player's score >= 100
    if (score[activePlayer] >= 20
         ) {
        // Finished the game
        playing= false
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
        
        diceEl.classList.add('hidden');

        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
        
        let word = document.querySelector(`.player--${activePlayer}`);

        // word.textContent =`You Won 🥳`;
        // word.style.fontSize = '7rem';
        // word.style.textAlign = 'center';
        // word.style.color = 'white';

    }else{
        // switch the next player
        switchingPlayer();    
    }

}
});

// BTNNEW function

btnNew.addEventListener("click",init);

































