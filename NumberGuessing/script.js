const min = 50;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);

//get input from html
guessinput = document.getElementById("guessinput");
guessoutput = document.getElementById("guessoutput");

//define variables
let ettempts = 0;
let guess;
let Stop = false;


//mainfunction
function submitfun() {
  if (Stop) return;

  guess = Number(guessinput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    guessoutput.textContent = `Please enter a valid number between ${min} and ${max}`;
  } else {
    ettempts++;
    if (guess < answer) {
      guessoutput.textContent = `You are too low`;
    } else if (guess > answer) {
      guessoutput.textContent = `You are too high`;
    } else {
      guessoutput.textContent = `You guessed number it was ${answer}. it took you ${ettempts} attamps`;
      Stop = true;
    }
  }
}