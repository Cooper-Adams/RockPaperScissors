let pc = "null";
let cc = "null";

//Function that chooses a random number between 0 and 2,
//where 0 is rock, 1 is paper, and 2 is scissors, then
//returns that choice
function computerPlay(){
    let num = getRandomInt(3);

    if (num === 0)
    {
        return "Rock";
    }

    else if (num === 1)
    {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

function playerPlay()
{
    while(true)
    {
        let input = prompt("Please enter Rock, Paper, or Scissors.")

        if (input.toLowerCase() == "rock" || input.toLowerCase() == "paper" || input.toLowerCase() == "scissors")
        {
            return input.charAt(0).toUpperCase() + input.slice(1);
        }

        else
        {
            alert("You must enter rock, paper, or scissors (case insensitive).")
        }
    }
}

function rockPaperScissors(playerSel, computerSel)
{
    if (playerSel == computerSel)
    {
        console.log(playerSel + " versus " + computerSel + ". It's a tie!");
        return 2;
    }

    else if (playerSel == "Rock" && computerSel == "Scissors")
    {
        console.log("Rock beats scissors. You win!");
        return 0;
    }

    else if (playerSel == "Paper" && computerSel == "Rock")
    {
        console.log("Paper beats rock. You win!");
        return 0;
    }

    else if (playerSel == "Scissors" && computerSel == "Paper")
    {
        console.log("Scissors beats paper. You win!");
        return 0;
    }

    else if (playerSel == "Rock" && computerSel == "Paper")
    {
        console.log("Paper beats rock. You lose!");
        return 1;
    }

    else if (playerSel == "Paper" && computerSel == "Scissors")
    {
        console.log("Scissors beats paper. You lose!");
        return 1;
    }

    else if (playerSel == "Scissors" && computerSel == "Rock")
    {
        console.log("Rock beats scissors. You lose!");
        return 1;
    }
}

function game()
{
    let us = 0;
    let cs = 0;
    let winVal = 0;

    for (let i = 0; i < 5; ++i)
    {
        pc = playerPlay();
        cc = computerPlay();

        winVal = rockPaperScissors(pc, cc);

        if (winVal == 0)
        {
            us++;
        }

        else if (winVal == 1)
        {
            cs++;
        }
    }

    console.log("You: " + us + ", Computer: " + cs)

    if (us > cs)
    {
        console.log("You won the 5 round match!")
        return;
    }

    else 
    {
        console.log("You lost the 5 round match!")
        return;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}