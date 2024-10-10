let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let value = Math.random();
    let computer_choice = 0;
    if (value >= 0 && value <= 0.33){
        computer_choice = "rock";
    }
    else if(value > 0.33 && value <= 0.66){
        computer_choice = "paper";
    }
    else{
        computer_choice = "sciccors";
    }
    return computer_choice;
}

function getHumanChoice(){
    let human_choice = prompt("Enter your choice: \n Options: rock, paper, sciccors");
    let human_value = human_choice.toLowerCase(human_choice);
    if (human_value == "rock"){
        return human_value;
    }
    else if (human_value == "paper"){
        return human_value;
    }
    else if (human_value == "sciccors"){
        return human_value;
    }
    else{
        return "error";
    }

}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("It's a tie!");
    }
    switch(humanChoice){
        case "rock":
        if(computerChoice == "paper"){
            console.log("you lose");
            computerScore++;
        }
        else if(computerChoice == "sciccors"){
            console.log("you win");
            humanScore++;
        }
        break; 

        case "paper":
        if(computerChoice == "sciccors"){
            console.log("you lose");
            computerScore++;
        }
        else if(computerChoice == "rock"){
            console.log("you win");
            humanScore++;
        }
        break;

        case "sciccors":
        if(computerChoice == "paper"){
            console.log("you win");
            humanScore++;
        }
        else if(computerChoice == "rock"){
            console.log("you lose");
            computerScore++;
        }
        break;
        
        default:
            console.log("invalid input");
            break;
    }
}
while(humanScore != 3 && computerScore != 3){
    human = getHumanChoice();
    computer = getComputerChoice();
    console.log("computer choice is:" + computer);
    playRound(human, computer);
    console.log(humanScore);
    console.log(computerScore);
}