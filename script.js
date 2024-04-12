/*
Start a new Git repo for your project.
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). 
This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play.
Tip: use the console to make sure this is returning the expected output before moving to the next step!
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and 
then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, 
so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at 
the end.
You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else 
(or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. 
Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/

/* 
-------PSEUDOCODE-----------

 create function getComputerChoice
 generate random numbers using math.random()
 if number = 1, return rock
 if number = 2 , return paper
 if number = 3, return scissors

 create playRound function with two parameters playerSelection and computerSelection
 pass parameter computerSelection using the return value of getComputerChoice function
 get parameter playerSelection from user using prompt box and pass into playRound function
 return a  string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"


 create a function playGame 
 loop playRound function 5 times 
 keep the score and report the winner or loser at the end 

*/
function getComputerChoice(){
    let number = Math.floor((Math.random()*3)+1);
      if (number==1) return ('rock');
      else if (number ==2) return ('paper');
      else return ('scissors');
      console.log(getComputerChoice());
}


function playRound(playerSelection,computerSelection){

    computerSelection = getComputerChoice();
    let player = window.prompt('what is your choice?(rock/paper/scissor)');
    playerSelection = player.toLowerCase();

  if(playerSelection==computerSelection)
    return ('Its a tie !');
  else if (playerSelection == 'rock' && computerSelection == 'paper')
    return ('Paper covers rock, Computer win !');
  else if (playerSelection == 'rock' && computerSelection == 'scissor')
    return ('rock crushes scissor, You wins !');
  else if (playerSelection == 'paper' && computerSelection == 'rock')
    return ('paper covers rock, You win !');
  else if (playerSelection == 'paper' && computerSelection == 'scissor')
    return ('scissor cuts paper, Computer win !');
  else if (playerSelection == 'scissor' && computerSelection == 'rock')
    return ('rock crushes scissor, Computer win !');
  else if (playerSelection == 'scissor' && computerSelection == 'paper')
    return ('scissor cuts paper, You win !');

    
}

function playGame(){
  let playerScore =0;
  let ComputerScore =0;
  for (let i=0;i<5;i++){
    let result = playRound();

  }
}



