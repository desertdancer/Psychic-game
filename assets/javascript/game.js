// game.js 
// basics?
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];
var arr = new Array("a", "b", "c", "d", "e", "f", "g",
   "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
   "s", "t", "u", "v", "w", "x", "y", "z");

refresh();
resetRandomNumber();
function refresh() {//resetting screen to current values
   document.querySelector("#wins").textContent = wins;
   document.querySelector("#guesses").textContent = guesses;
   document.querySelector("#losses").textContent = losses;
   document.querySelector("#guesses-sofar").textContent = guessesSoFar;
}
var randomCh;//the current chosen random character
function resetRandomNumber() { //choose a new random character
   var num = Math.round(Math.random() * 26); 
   randomCh = arr[num];
}


function handleKeyUp(e) {
   if (!arr.includes(e.key)) return false;//ignore characters other than a-z
   var userGuess = e.key; 

   // check guess
   if (randomCh === userGuess) {//correct guess, game over, user wins
      wins++;
      guesses = 10;
      guessesSoFar = [];
      resetRandomNumber();
   } else {
      guesses--;
      if (guesses === 0) {
         losses++;
         guesses = 10;
         guessesSoFar = [];
         resetRandomNumber();
      }
      else {
         guessesSoFar.push(userGuess);
      }
   }
   refresh(); 
}

document.getElementById("body").addEventListener("keyup", handleKeyUp);


