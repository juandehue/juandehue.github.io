function getComputerChoice(){
    let computerChoice;

    computerChoice = ['Rock', 'Paper','Scissor'];
    /*funciona extraño el random pero jala*/ 
    let result = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[result];
}

function playRound(playerSelection, computerSelection){
    let winner ;
    /* Piedra*/
    if(playerSelection == 'Rock'){
        if(computerSelection == 'Rock')
        winner = playerSelection + ' VS ' + computerSelection + ',= TIE';
        if(computerSelection == 'Paper')
        winner = playerSelection + ' VS ' + computerSelection + ',= Lose, Paper bet rock';
        if(computerSelection == 'Scissor')
        winner = playerSelection + ' VS ' + computerSelection + ',= Winner, Rock bet paper';
    }
    /* Tijera */ 
    if(playerSelection == 'Scissor'){
        if(computerSelection == 'Rock')
        winner = playerSelection + ' VS ' + computerSelection + ',= Lose. Rock bet Scissor';
        if(computerSelection == 'Paper')
        winner = playerSelection + ' VS ' + computerSelection + ',= Winner, Scissor bet paper';
        if(computerSelection == 'Scissor')
        winner = playerSelection + ' VS ' + computerSelection + ',= Tie,';
    }
    /* Papel*/
    if(playerSelection == 'Paper'){
        if(computerSelection == 'Rock')
        winner = playerSelection + ' VS ' + computerSelection + ',= Winner, Paper bet Rock';
        if(computerSelection == 'Paper')
        winner = playerSelection + ' VS ' + computerSelection + ',= Tie';
        if(computerSelection == 'Scissor')
        winner = playerSelection + ' VS ' + computerSelection + ',= Lose, Scissor bet Paper';
    }
    
    return winner;
}

function game(){
    for(let i =  1; i<=5; i ++ ){

        console.log (playRound(playerSelection,computerSelection));

    }
}

const playerSelection = 'Paper';
const computerSelection = getComputerChoice();

/*console.log(playRound(playerSelection,computerSelection) );

console.log( getComputerChoice() );*/

console.log(game());
