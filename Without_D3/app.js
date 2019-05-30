var loses = 0;
var wins = 0;

var compare = function (choice1,choice2) {
    if (choice1 == choice2) {
        return "The result is a tie!";
    } 
    else if (choice1 == "rock"){
        if (choice2 =="scissors") {
            wins++;
            return "User wins";
        } 
        else {
            loses++;
            return "Sorry. computer wins.";
        }
    } 
    else if (choice1 == "paper") {
        if (choice2 == "rock") {
            wins++;
            return "User wins";
        } else {
            loses++;
            return "Sorry. Computer win.";
        }
    } 
    else if (choice1 == "scissors") {
        if (choice2 == "rock") {
            loses++;
            return "Sorry. Computer wins";
        } else {
           wins++;
            return "User win";
        }
    }
};

function play(userChoice){
    console.log(userChoice);
        
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(`The computer choice is ${computerChoice}`);
    document.getElementById("scorebox").innerText = (`The user choice is ${userChoice} and computer choice is ${computerChoice}`);
    var winner = compare(userChoice,computerChoice);
    console.log(winner);
    document.getElementById("results").innerHTML = winner;
    document.getElementById("wins").innerText = (`The number of wins for the user is ${wins}`);
    document.getElementById("loses").innerText = (`The number of loses for the user is ${loses}`);
}

function reset(){
	loses = 0;
	wins = 0;
	document.getElementById("wins").innerText = (`The number of wins for the user is ${wins}`);
    document.getElementById("loses").innerText = (`The number of loses for the user is ${loses}`);
};

