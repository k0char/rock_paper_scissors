choices = [
    'rock','paper','scissors'
]

function getComputerChoice(choices) {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getUserChoice () {
    let choice = prompt("Rock, paper, scissors");
    return choice;
}

function playRound(playerSelection, computerSelection) {

    let playerSelection_lower = playerSelection.toLowerCase()
    console.log(`player: ${playerSelection_lower}`);

    let computerSelection_lower = computerSelection.toLowerCase()
    console.log(`computer: ${computerSelection_lower}`);

    if (playerSelection_lower == computerSelection_lower) {
        alert("draw");
        return 'draw';

    } else if (playerSelection_lower == "rock" && computerSelection_lower == "scissors" || playerSelection_lower == "paper" && computerSelection_lower == "rock" || playerSelection_lower == "scissors" && computerSelection_lower == "paper") {
        alert("player's point");
        return 'player';

    } else if (computerSelection_lower == "rock" && playerSelection_lower == "scissors" || computerSelection_lower == "paper" && playerSelection_lower == "rock" || computerSelection_lower == "scissors" && playerSelection_lower == "paper") {
        alert("computer's point");
        return 'computer';

    } else {
        alert("Check what your writed!")
        return null;
    }
}
function play () {

    let computer_wins = 0
    let player_wins = 0

    for (let i=0; i<3; i++) {

        let computerSelection = getComputerChoice(choices);
        let playerSelection = getUserChoice();
        let roundWinner = playRound(playerSelection, computerSelection);

        switch (roundWinner) {
            case 'player':
                player_wins++;
                break;

            case 'computer':
                computer_wins++;
                break;

            case 'draw':
                i--;
                break;
            
            case null:
                i--;
                break;
        }
    }
    if (computer_wins > player_wins) {
        alert('Computer won :(');

    } else if (computer_wins < player_wins) {
        alert('User won!!!:D');
    }

}
// Rozpoczyna gre
play();