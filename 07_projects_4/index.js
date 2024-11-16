let randomnum = parseInt((Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

//we are creating a paragraph here
const p = document.createElement('p');

// let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
   submit.addEventListener('click' , function(e){
  // to prevent e to go to the serve
  e.preventDefault();
  const guess = parseInt(userinput.value);
  validateGuess(guess);
   })
}

//validates that value is between 1 and 100 or not
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess < 1){
    alert('Please enter a number greater than 1');
  }
  else if(guess > 100){
    alert('Please enter a number less than 100');
  }
  else{
    // prevGuess.push(guess);
    if(numGuess === 11){
        displayguess(guess);
        displaymessage(`Game Over. Random Number was ${randomnum}`);
        endGame();
    }
    else{
        displayguess(guess);
         checkGuess(guess);
    }
  }
}

//checks that is value is equal to random num or not if yes then display that value
//and if low say low and if high say high
function checkGuess(guess){
  if(guess === randomnum){
    displaymessage(`You guessed it right`);
    endGame();
  }
  else if(guess < randomnum){
    displaymessage(`Number is too low`);
  }
  else{
    displaymessage(`Number is too high`);
  }

}

//clean guess value update prevguess array and update remaining array
function displayguess(guess){
userinput.value = '';
numGuess++;
guessSlot.innerHTML += `${guess} `;
if(numGuess === 12){
    remaining.innerHTML = `0`;
}
else{
    remaining.innerHTML = `${11-numGuess}`;
}
}

//all manupulation with the DOM 
function displaymessage(message){
loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
 userinput.value = '';
 userinput.setAttribute('disabled' , '');
 p.classList.add('button');
 p.innerHTML = `<button id="newgame">Start New Game</button>`;
 startover.appendChild(p);
 playGame = false;
 newGame();
}

function newGame(){
 const newgamebutton = document.querySelector('#newgame');
 newgamebutton.addEventListener('click', function(e){
    randomnum = parseInt((Math.random()*100 + 1));
    // prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
 })
}
