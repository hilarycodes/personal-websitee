let computerMove = '';
let result = '';
let move = '';
let declaration = '';
let playerScore = 0;
let computerScore = 0;

//converts game history, a JSON string, to a Js object so it can be saved in the playerRecord variable.
let playerRecord = JSON.parse(localStorage.getItem('GameHistory')) ||  {wins: 0, losses: 0, draws: 0};

document.onload = updateRecords();
const title = document.getElementById('page-title');
console.log(title);

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

    if((computerMove === 'rock' && move === 'rock') || (computerMove === 'paper' && move === 'paper') || (computerMove === 'scissors' && move === 'scissors'))
    {
        updateScore('tie')
        declaration = `It's a tie`;
        alert(`You played ${move} and the computer played ${computerMove}. ${declaration}`);
        updateRecords('tie'); 
    }
    else if((computerMove === 'rock' && move === 'paper') || (computerMove === 'paper' && move === 'scissors') || (computerMove === 'scissors' && move === 'rock'))
    {
        updateScore('win')
        declaration = 'You win';
        alert(`You played ${move} and the computer played ${computerMove}. ${declaration}`);
        updateRecords('win');
    }
    else if((computerMove === 'rock' && move === 'scissors') || (computerMove === 'paper' && move === 'rock') || (computerMove === 'scissors' && move === 'paper'))
    {
        updateScore('loss')
        declaration = 'You lose!';
        alert(`You played ${move} and the computer played ${computerMove}. ${declaration}`);
        updateRecords('loss');
    }
    console.log(result);
    declareWinner();

    const gameResults = document.getElementById('game-results');
    gameResults.innerText = declaration;
    const gameMoves = document.getElementById('game-moves');
    gameMoves.innerText = `You = ${move} : Computer = ${computerMove}`;
}

function updateScore(result) 
{
    if(result === 'tie'){
        playerScore = playerScore;
        computerScore = computerScore;}
    else if (result === 'win'){ 
        playerScore++;}
    else if (result === 'loss'){
        computerScore++;}
    //used string interpolation to display the integer scores on the webpage
    document.getElementById('player-scores').innerText = `${playerScore}`;
    document.getElementById('computer-scores').innerText = `${computerScore}`;
    console.log(document.getElementById("rock-button"));
}

function updateRecords(result) {
    //converts player records, a Js object, to a JSON string and sets game history as the JSON string
    localStorage.setItem('GameHistory', JSON.stringify(playerRecord));

    if( result === 'win'){
        playerRecord.wins += 1;
    }
    else if(result === 'loss'){
        playerRecord.losses += 1;
    }
    else if(result === 'tie'){
        playerRecord.draws += 1;
    }
    const gameRecords = document.getElementById('game-records');
    gameRecords.innerText = `Wins: ${playerRecord.wins} Losses: ${playerRecord.losses} Draws: ${playerRecord.draws}`;
    console.log(playerRecord);
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
    localStorage.removeItem('GameHistory');
}