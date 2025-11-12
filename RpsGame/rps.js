let computerMove = '';
let result = '';
let move = '';
let declaration = '';
let playerScore = 0;
let computerScore = 0;
let numberForPlayer = 0;
let playerChoice = '';
let playerButton = '';
let numeral = 0;

//converts game history, a JSON string, to a Js object so it can be saved in the playerRecord variable.
let playerRecord = JSON.parse(localStorage.getItem('GameHistory')) ||  {wins: 0, losses: 0, draws: 0};

document.onload = updateRecords();

function generateComputerMove(min, max) {
    randomNumber = Math.trunc(Math.round(Math.random * (max - min)));
    switch (randomNumber) {
        case 0 : computerMove = "rock"
            break;
        case 1 : computerMove = "paper"
            break;
        case 2 : computerMove = "scissors"
            break;
    }
}

function playerMove(playerChoice) {
    generateComputerMove(1, 3);
    const result = getResult(playerChoice, computerMove);

    updateScore(result);
    updateRecords(result);

    const declaration = getDeclaration(result);
    // alert(`You played ${playerChoice} and the computer played ${computerMove}. ${declaration}`);

    document.getElementById('game-results').innerText = declaration;
    document.getElementById('game-moves').innerText = `You = ${playerChoice} : Computer = ${computerMove}`;

    declareWinner();
}

function getResult(player, computer) {
    if (player === computer) 
        return 'tie';

    const winsAgainst = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    return winsAgainst[player] === computer ? 'win' : 'loss';
}

// Helper to get display message
function getDeclaration(result) {
    switch (result) {
        case 'win': return 'You win!';
        case 'loss': return 'You lose!';
        case 'tie': return "It's a tie!";
        default: return '';
    }
}

function updateScore(result) {
    if (result === 'win')
        playerScore++;
    else if (result === 'loss')
        computerScore++;
    document.getElementById('player-scores').innerText = `${playerScore}`;
    document.getElementById('computer-scores').innerText = `${computerScore}`;
}

function updateRecords(result) {
    if (result === 'win') 
        playerRecord.wins++;
    else if (result === 'loss') 
        playerRecord.losses++;
    else if (result === 'tie') 
        playerRecord.draws++;

    localStorage.setItem('GameHistory', JSON.stringify(playerRecord));

    document.getElementById('game-records').innerText = 
        `Wins: ${playerRecord.wins} Losses: ${playerRecord.losses} Draws: ${playerRecord.draws}`;

    console.log(playerRecord);
}

function declareWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const message = playerScore === 5 
            ? "You are the winner! Congratulations!" 
            : "The computer is the winner! Better luck next time!";
        
        resetGame();
        alert(message);
    }
}

function redirectToVideo() {
    window.location.href = "https://www.youtube.com/watch?v=Mu79PNuINs8";
}


function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    localStorage.removeItem('GameHistory');
}