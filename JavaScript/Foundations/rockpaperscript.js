    function getComputerChoice(){

    let res= Math.floor(Math.random()*3)+1;
    let c_answer="";
    switch(res){
        case 1:
            console.log("Computer choose rock");
            c_answer="rock";
            break;
        case 2:
            console.log("Computer choose paper");
            c_answer="paper";
            break;
        case 3:
            console.log("Computer choose scissors");
            c_answer="scissors";
            break;
    }
    return c_answer;
}

function getUserChoice(){
    count=0;
    var answer = prompt("Rock/paper/scissors");
    answer = answer.toLowerCase();
    return answer;
}

function playRound(playerSelection,computerSelection){
    let result = 69;
    console.log("User choose ", playerSelection);
    
        if (playerSelection === computerSelection){
            result = 2; //when tie
        } else {
            // if (playerSelection === "rock"){
            //     if(computerSelection === "paper"){
            //         result = 0; //user lose
            //     } else{
            //         result = 1; //user win
            //     }
            // }
            // if (playerSelection === "paper"){
            //     if(computerSelection === "scissors"){
            //         result = 0;
            //     } else if (computerSelection === "rock"){
            //         result = 1;
            //     }
                
            // } else {
            //     // if player choose scissors
            //     if (computerSelection === "rock"){
            //         result = 0;
            //     } else {
            //         result = 1;
            //     }
            // }
            switch (playerSelection) {
                case "rock":
                    if(computerSelection === "paper"){
                        result = 0; //user lose
                        } else{
                                result = 1; //user win
                            }
                    break;
                case "paper":
                    if(computerSelection === "scissors"){
                        result = 0;
                        } else if (computerSelection === "rock"){
                            result = 1;
                        }
                        break;
                case "scissors":
                    if (computerSelection === "rock"){
                                result = 0;
                            } else {
                                result = 1;
                            }
                            break;
                default:
                    break;
            }
        }
    let final =result;
    result =69;
    // console.log("----------", final)
    messagePrint(final);
    return final;
    }

function    messagePrint(number){
    switch (number) {
        case 0:
            console.log("User lost");
            break;
        case 1:
            console.log("Computer lost");
            break;
        case 2:
            console.log("Its a tie");
            break;
        default:
            break;
    }
}

function game(){
    let user = {
        puntaje: 0
    };
    let computer = {
        puntaje: 0
    };
    let round = 0;
    for (let index = 0; index < 5; index++) {
        keepScore(
                user,
                computer,
                playRound(getUserChoice(),getComputerChoice()));
                round++;    
                console.log("Round: ",round);
                console.log();
            }

}
function keepScore(user,computer,num){
    if (num === 0){
        computer.puntaje++;
    }
    if (num === 1){
        user.puntaje++;
    }
    console.log("--- SCORES ---")
    console.log("User: ", user.puntaje);
    console.log("Computer: ", computer.puntaje);
}
