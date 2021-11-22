//Global Score variables so they can be updated whenever a user plays.
let userScore = 0;
let compScore = 0;
let gamesPlayed = 0;

//Instantiates and reports the scoreboard before a game is played.
const score = document.querySelector('#scoreBoard');
score.textContent = 'User Score: 0, Computer Score: 0';

//Instantiates the game result text element above the scoreboard,
//but it is not visible until a game has been played.
const gameResult = document.createElement('p');
document.body.insertBefore(gameResult, scoreBoard);

//Adds an event listener to the rock, paper, and scissors buttons
const btns = Array.from(document.querySelectorAll('.button'));
btns.forEach(btn => btn.addEventListener('click', game));

//The scoreboard function. This updates the score.textContent so as to
//keep track of who is winning/losing.
function output(hScore, cScore) 
{
    score.textContent = 'User Score: ' + hScore + ', Computer Score: ' + cScore ;
}

//Function that chooses a random number between 0 and 2,
//where 0 is rock, 1 is paper, and 2 is scissors, then
//returns that choice
function computerPlay(){
    let num = getRandomInt(3);

    //Computer chooses rock
    if (num === 0)
    {
        return "Rock";
    }

    //Computer chooses paper
    else if (num === 1)
    {
        return "Paper";
    }

    //Computer chooses scissors
    else {
        return "Scissors";
    }
}

//Passes the button that the user clicks and returns their choice.
function playerPlay(button)
{
    //Player clicks rock button
    if (button.target.id == 'btn1')
    {
        return 'Rock';
    }

    //Player clicks paper button
    else if (button.target.id == 'btn2')
    {
        return 'Paper';
    }

    //Player clicks scissors button
    else if (button.target.id == 'btn3')
    {
        return 'Scissors';
    }
}

//Compares player and user choice, and returns the winner.
function rockPaperScissors(playerSel, computerSel)
{
    //Result of a tie
    if (playerSel == computerSel)
    {
        gameResult.textContent = playerSel + " versus " + computerSel + ". It's a tie!";
        return 2;
    }

    //Player wins with rock
    else if (playerSel == "Rock" && computerSel == "Scissors")
    {
        gameResult.textContent = "Rock beats scissors. You win!";
        return 0;
    }

    //Player wins with paper
    else if (playerSel == "Paper" && computerSel == "Rock")
    {
        gameResult.textContent = "Paper beats rock. You win!";
        return 0;
    }

    //Player wins with scissors
    else if (playerSel == "Scissors" && computerSel == "Paper")
    {
        gameResult.textContent = "Scissors beats paper. You win!";
        return 0;
    }

    //Computer wins with paper
    else if (playerSel == "Rock" && computerSel == "Paper")
    {
        gameResult.textContent = "Paper beats rock. You lose!";
        return 1;
    }

    //Computer wins with scissors
    else if (playerSel == "Paper" && computerSel == "Scissors")
    {
        gameResult.textContent = "Scissors beats paper. You lose!";
        return 1;
    }

    //Computer wins with rock
    else if (playerSel == "Scissors" && computerSel == "Rock")
    {
        gameResult.textContent = "Rock beats scissors. You lose!";
        return 1;
    }
}

//Function that is called when one of the rock, paper, or scissors
//buttons are clicked by the player. It will allow the player to
//play up to 5 times, and will pit the players choice against a 
//random selection of the computer, and will report the winner of 
//the round, and then the game once 5 games have been won.
function game(e)
{
    //If max number of games has been won, function terminates.
    if (userScore == 5 || compScore == 5)
    {
        return;
    }

    //Game variables
    let playerChoice = "null";
    let computerChoice = "null";
    let winVal = 0;

    //Gets the player and computer choices
    playerChoice = playerPlay(e);
    computerChoice = computerPlay();

    //Gets the result between the computer and player's choices
    winVal = rockPaperScissors(playerChoice, computerChoice);

    //Adds to score and or games played depending on the result of winVal
    if (winVal == 0)
    {
        userScore++;
    }

    else if (winVal == 1)
    {
        compScore++;
    }

    output(userScore, compScore);

    //Checks if the max games have been played and reports win, loss, or
    //tie depending on the scores.
    if (userScore == 5 || compScore == 5)
    {
        //Player wins
        if (userScore == 5)
        {
            gameResult.innerHTML = gameResult.textContent + "<br>You won! Refresh the page to play again.";
        }

        //Computer wins
        else if (compScore == 5)
        {
            gameResult.innerHTML = gameResult.textContent + "<br>You lost! Refresh the page to play again.";
        }

        //End game function
        return;
    }
}

//Function to get a random number between 0 and max (non-inclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}