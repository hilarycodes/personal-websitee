let computerMove = '';
let result = '';
let move = '';
let declaration = '';
let playerScore = 0;
let computerScore = 0;
let numberForPlayer = 0;
let playerMoves = '';

//converts game history, a JSON string, to a Js object so it can be saved in the playerRecord variable.
let playerRecord = JSON.parse(localStorage.getItem('GameHistory')) ||  {wins: 0, losses: 0, draws: 0};

document.onload = updateRecords();

function generateComputerMove()
{
    //generates a random number between 1 and 9
    let numberForComputerMove = getRandomInt(1, 9);
    
    if(numberForComputerMove >= 1 && numberForComputerMove <= 3)
    {
        computerMove = "rock";
    }
    else if(numberForComputerMove >= 4 && numberForComputerMove <= 6)
    {
        computerMove = "paper";
    }
    else if(numberForComputerMove >= 7 && numberForComputerMove <= 9)
    {
        computerMove = "scissors";
    }
    return computerMove;   
}

function getRandomInt(min, max) {
  return Math.trunc((Math.random() * (max - min)) + min);
}

function playerMove(move)
{   
    const playerGameMoves = document.getElementById('player-game-moves');
    const computerGameMoves = document.getElementById('computer-game-moves');
    generateComputerMove();

    switch (move) {
        case "rock":
            numberForPlayer = getRandomInt(1, 3);
            playerMoves = "rock"
            break;
        case "paper":
            numberForPlayer = getRandomInt(4, 6);
            playerMoves = "paper"
        case "scissors":
            numberForPlayer = Math.random(7, 9);
            playerMoves = "scissors"
            break;
    }

    if(playerMoves === computerMove)
    {
        updateScore('tie');
        declaration = `It's a tie!`;
        // playerGameMoves.innerText = `You ${document.getElementById("rock-button").innerText}`;
        // computerGameMoves.innerText = `Computer ${document.getElementById("rock-button").innerText}`;
        updateRecords('tie'); 
    }
    else if(playerMoves )
    // if(computerMove === 'rock' && move === 'rock')
    // {
    //     updateScore('tie')
    //     declaration = `It's a tie!`;
    //     playerGameMoves.innerText = `You ${document.getElementById("rock-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("rock-button").innerText}`;
    //     updateRecords('tie'); 
    // }
    // else if(computerMove === 'rock' && move === 'paper')
    // {
    //     updateScore('win')
    //     declaration = 'You win!';
    //     playerGameMoves.innerText = `You ${document.getElementById("paper-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("rock-button").innerText}`;
    //     updateRecords('win');
    // }
    // else if(computerMove === 'rock' && move === 'scissors')
    // {
    //     updateScore('loss')
    //     declaration = 'You lose!';
    //     playerGameMoves.innerText = `You ${document.getElementById("scissors-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("rock-button").innerText}`;
    //     updateRecords('loss');
    // }
    // else if(computerMove === 'paper' && move === 'rock')
    // {
    //     updateScore('loss');
    //     declaration = 'You lose!'
    //     playerGameMoves.innerText = `You ${document.getElementById("rock-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("paper-button").innerText}`;
    //     updateRecords('loss');
    // }
    // else if(computerMove === 'paper' && move === 'paper')
    // {
    //     updateScore('tie')
    //     declaration = `It's a tie!`;
    //     playerGameMoves.innerText = `You ${document.getElementById("paper-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("paper-button").innerText}`;
    //     updateRecords('tie');
    // }
    // else if(computerMove === 'paper' && move === 'scissors')
    // {
    //     updateScore('win')
    //     declaration = 'You win!';
    //     playerGameMoves.innerText = `You ${document.getElementById("scissors-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("paper-button").innerText}`;
    //     updateRecords('win');
    // }
    // else if(computerMove === 'scissors' && move === 'rock')
    // {
    //     updateScore('win');
    //     declaration = 'You win!';
    //     playerGameMoves.innerText = `You ${document.getElementById("rock-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("scissors-button").innerText}`;
    //     updateRecords('win'); 
    // }
    // else if(computerMove === 'scissors' && move === 'paper')
    // {
    //     updateScore('loss')
    //     declaration = 'You lose!';
    //     playerGameMoves.innerText = `You ${document.getElementById("paper-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("scissors-button").innerText}`;
    //     updateRecords('loss');
    // }
    // else if(computerMove === 'scissors' && move === 'scissors')
    // {
    //     updateScore('tie')
    //     declaration = `It's a tie!`;
    //     playerGameMoves.innerText = `You ${document.getElementById("scissors-button").innerText}`;
    //     computerGameMoves.innerText = `Computer ${document.getElementById("scissors-button").innerText}`;
    //     updateRecords('tie');
    // }
    console.log(result);
    declareWinner();

    const gameResults = document.getElementById('game-results');
    gameResults.innerText = declaration;
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