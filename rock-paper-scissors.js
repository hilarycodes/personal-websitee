let computerMove = '';
let result = '';
let move = '';
let playerScore = 0;
let computerScore = 0;

document.onload = updateScore();

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
    return computerMove;    
}

function playerMove(move)
{   
    generateComputerMove();

    if(computerMove === 'rock' && move === 'rock')
    {
        result = 'tie';
        updateScore('tie')
        alert(`You played ${move} and the computer played ${computerMove}. It's a tie!`); // alert for tie
    }
    else if(computerMove === 'rock' && move === 'paper')
    {
        updateScore('win')
        alert(`You played ${move} and the computer played ${computerMove}. You win!`);
    }
    else if(computerMove === 'rock' && move === 'scissors')
    {
        updateScore('loss')
        alert(`You played ${move} and the computer played ${computerMove}. You lose!`);
    }
    else if(computerMove === 'paper' && move === 'rock')
    {
        result = 'loss';
        updateScore('loss');
        alert(`You played ${move} and the computer played ${computerMove}. You lose!`); // alert for loss
    }
    else if(computerMove === 'paper' && move === 'paper')
    {
        updateScore('tie')
        alert(`You played ${move} and the computer played ${computerMove}. It's a tie!`);
    }
    else if(computerMove === 'paper' && move === 'scissors')
    {
        updateScore('win')
        alert(`You played ${move} and the computer played ${computerMove}. You win!`);
    }
    else if(computerMove === 'scissors' && move === 'rock')
    {
        result = 'win';
        updateScore('win');
        alert(`You played ${move} and the computer played ${computerMove}. You win!`); // alert for win
    }
    else if(computerMove === 'scissors' && move === 'paper')
    {
        updateScore('loss')
        alert(`You played ${move} and the computer played ${computerMove}. You lose!`);
    }
    else if(computerMove === 'scissors' && move === 'scissors')
    {
        updateScore('tie')
        alert(`You played ${move} and the computer played ${computerMove}. It's a tie!`);
    }
    console.log(result);
    declareWinner();
}

function updateScore(result) 
{
    if(result === 'tie')
        playerScore = playerScore;
    else if (result === 'win') 
        playerScore++;
    else if (result === 'loss')
        computerScore++;
    document.getElementById('player-scores').innerText = `${playerScore}`;
    document.getElementById('computer-scores').innerText = `${computerScore}`;
} 

function redirectToVideo()
{
    window.location.href = "https://www.youtube.com/watch?v=Mu79PNuINs8";
}

function declareWinner()
{
    if(playerScore === 5)
    {
        resetGame();
        alert("You are the winner! Congratulations!");
    }
    else if(computerScore === 5)
    {
        resetGame();
        alert("The computer is the winner! Better luck next time!");
    }
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
}