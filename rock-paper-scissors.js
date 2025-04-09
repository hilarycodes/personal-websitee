let computerMove = '';
let result = '';

function generateComputerMove()
{
    let randomNumberForComputerMove = Math.random();
    
    if(randomNumberForComputerMove >= 0 && randomNumberForComputerMove < (1/3))
    {
        computerMove = "rock";
    }
    else if(randomNumberForComputerMove >= (1/3) && randomNumberForComputerMove < (2/3))
    {
        computerMove = "paper";
    }
    else if(randomNumberForComputerMove >= (2/3) && randomNumberForComputerMove <= 1)
    {
        computerMove = "scissors";
    }
    console.log(computerMove);    
}

function appendRock()
{   
    let btn = document.getElementById("rock-button");
    let buttonName = btn.getAttribute("name");
    
    generateComputerMove();

    if(computerMove === 'rock')
    {
        result = 'tie';
        alert(`You played ${buttonName} and the computer played ${computerMove}. It's a tie!`); // alert for tie
    }
    else if(computerMove === 'paper')
    {
        result = 'loss';
        alert(`You played ${buttonName} and the computer played ${computerMove}. You lose!`); // alert for loss
    }
    else if(computerMove === 'scissors')
    {
        result = 'win';
        alert(`You played ${buttonName} and the computer played ${computerMove}. You win!`); // alert for win
    }
    console.log(result);
}

function appendPaper()
{
    let btn = document.getElementById("paper-button");
    let buttonName = btn.getAttribute("name");

    generateComputerMove();

    if(computerMove === 'rock')
    {
        result = 'win';
        alert(`You played ${buttonName} and the computer played ${computerMove}. You win!`); // alert for win
    }
    else if(computerMove === 'paper')
    {
        result = 'tie';
        alert(`You played ${buttonName} and the computer played ${computerMove}. It's a tie!`); // alert for tie
    }
    else if(computerMove === 'scissors')
    {
        result = 'loss';
        alert(`You played ${buttonName} and the computer played ${computerMove}. You lose!`); // alert for loss
    }
    console.log(result);
    const paperButton = document.getElementById('paper-button');
    paperButton.innerHTML = 'Paper <span class="icon">📄</span>';
}

function appendScissors()
{
    let btn = document.getElementById("rock-button");
    let buttonName = btn.getAttribute("name");

    generateComputerMove();
    if(computerMove === 'rock')
    {
        result = 'loss';
        alert(`You played ${buttonName} and the computer played ${computerMove}. You lose!`); // alert for loss
    }
    else if(computerMove === 'paper')
    {
        result = 'win';
        alert(`You played ${buttonName} and the computer played ${computerMove}. You win!`); // alert for win
    }
    else if(computerMove === 'scissors')
    {
        result = 'tie';
        alert(`You played ${buttonName} and the computer played ${computerMove}. It's a tie!`); // alert for tie
    }
    console.log(result);
    const scissorsButton = document.getElementById('scissors-button');
    scissorsButton.innerHTML = 'Scissors <span class="icon">✂️</span>';
}