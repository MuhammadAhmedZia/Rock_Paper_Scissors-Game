function playGame() {
    let userscore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        // let choice = ['rock', 'paper', 'scissors'];
        // let randomChoice = Math.random(choice);
        // let roundRandomChoice = Math.floor(randomChoice * 3)
        // return roundRandomChoice;
        let randomNo = Math.random();
        if (randomNo < 0.33) {
            return  'rock';
        }else if(randomNo < 0.66){
            return "paper";
        }else{
            return "scissors"
        }

    }

    function getUserChoice() {
        let choice = prompt("Enter Your Choice: ","");
        return choice;
    }

    function playRound(computerChoice, userChoice) {
        if(userChoice === computerChoice){
            console.log("Match is tie both choose same ");
        }
        else if(
        (userChoice === 'rock' && computerChoice === 'scissors')||
        (userChoice === 'scissors' && computerChoice === 'paper')||
        (userChoice === 'paper' && computerChoice === 'rock'))
            {
                userscore++;
                console.log(`You Win ${userChoice} Beat ${computerChoice}`);
        }else{
            computerScore++;
                console.log(`Computer Win ${computerChoice} Beat ${userChoice}`);
        }
    }

       for (let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: Human ${userscore} - Computer ${computerScore}`);
    }

    // Declare final winner
    console.log("--- Final Result ---");
    if (userscore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > userscore) {
        console.log("Game over! The computer won.");
    } else {
        console.log("It's a draw!");
    }


}



playGame();

