let computerScore = 0;
let humanScore = 0;

let playerscore = document.querySelector("#playerScore");
let Aiscore = document.querySelector("#AIScore");
let result = document.querySelector("#result");
let restart = document.querySelector("#restart");

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
        computer_choice = "scissors";
    }
    return computer_choice;
}

//need to take input from the button that the user clicked
// function getHumanChoice(){
//     let human_choice = prompt("Enter your choice: \n Options: rock, paper, scissors");
//     let human_value = human_choice.toLowerCase(human_choice);
//     if (human_value == "rock"){
//         return human_value;
//     }
//     else if (human_value == "paper"){
//         return human_value;
//     }
//     else if (human_value == "scissors"){
//         return human_value;
//     }
//     else{
//         return "error";
//     }

// }

let selection = document.querySelector(".selection");

selection.addEventListener("click", (e)=>{
    let targetID = e.target.id;
    let computerChoice = getComputerChoice();
    if(humanScore == 3 || computerScore == 3){
        checkWinner(computerScore, humanScore);
        return false;
    }
    switch(targetID){
        case "rock":
            playRound(targetID, computerChoice);
            break;

        case "paper":
            playRound(targetID, computerChoice);
            break;

        case "scissors":
            playRound(targetID, computerChoice);
            break;
    }
});

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        result.innerText = "It's a tie!";
    }
    switch(humanChoice){
        case "rock":
        if(computerChoice == "paper"){
            result.innerText = "you lose";
            computerScore++;
            Aiscore.innerText = computerScore;
        }
        else if(computerChoice == "scissors"){
            result.innerText = "you win";
            humanScore++;
            playerscore.innerText = humanScore;
        }
        break; 

        case "paper":
        if(computerChoice == "scissors"){
            result.innerText = "you lose";
            computerScore++;
            Aiscore.innerText = computerScore;
        }
        else if(computerChoice == "rock"){
            result.innerText = "you win";
            humanScore++;
            playerscore.innerText = humanScore;
        }
        break;

        case "scissors":
        if(computerChoice == "paper"){
            result.innerText = "you win";
            humanScore++;
            playerscore.innerText = humanScore;
        }
        else if(computerChoice == "rock"){
            result.innerText = "you lose";
            computerScore++;
            Aiscore.innerText = computerScore;
        }
        break;
        
        default:
            console.log("invalid input");
            break;
    }
}

const div = document.createElement("div");
function checkWinner(computerScore, humanScore){
    if(humanScore == 3){
        div.textContent = "You win!";
    }
    else{
        div.textContent = "You lose!"
    }
    div.append("\nGame Over!");

    if(!div.parentNode)
        result.appendChild(div);
}

restart.addEventListener("click", () =>{
    computerScore = 0;
    humanScore = 0;
    playerscore.innerText = 0;
    Aiscore.innerText = 0;
    div.innerText = "";
    result.innerText = "";
})
// while(humanScore != 3 && computerScore != 3){
//     human = getHumanChoice();
//     computer = getComputerChoice();
//     console.log("computer choice is:" + computer);
//     playRound(human, computer);
//     console.log(humanScore);
//     console.log(computerScore);
// }
