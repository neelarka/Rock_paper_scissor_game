// Selecting The Rock Paper and Scissors Button
var rock = d3.select(".Rock");
var paper = d3.select(".Paper");
var scissors = d3.select(".Scissors");
var resetBtn = d3.select(".reset");
var userInput = d3.select(".scorebox");
var result = d3.select(".results");
var win_count = d3.select(".wins");
var lose_count = d3.select(".loses");

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




// Use D3 `.on` to attach a click handler for the Rock button
rock.on("click", function() {
    //var newText = d3.event.target.value;
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
console.log(`The computer choice is ${computerChoice}`);
    console.log(this);
    var userChoice = "rock"
    userInput.text(`The user choice is ${userChoice} and computer choice is ${computerChoice}`)
    var winner = compare(userChoice,computerChoice);
    console.log(winner);
    result.text(winner);
    win_count.text(`The number of wins for the user is ${wins}`);
    lose_count.text(`The number of loses for the user is ${loses}`);
});

paper.on("click", function() {
    //var newText = d3.event.target.value;
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(this);
    var userChoice = "paper"
    userInput.text(`The user choice is ${userChoice} and computer choice is ${computerChoice}`)
    var winner = compare(userChoice,computerChoice);
    console.log(winner);
    result.text(winner)
    win_count.text(`The number of wins for the user is ${wins}`);
    lose_count.text(`The number of loses for the user is ${loses}`);

});

scissors.on("click", function() {
    //var newText = d3.event.target.value;
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(this);
    var userChoice = "scissors"
    userInput.text(`The user choice is ${userChoice} and computer choice is ${computerChoice}`)
    var winner = compare(userChoice,computerChoice);
    console.log(winner);
    result.text(winner)
    win_count.text(`The number of wins for the user is ${wins}`);
    lose_count.text(`The number of loses for the user is ${loses}`);
});


resetBtn.on("click", function(){
	loses = 0;
	wins = 0;
	win_count.text(`The number of wins for the user is ${wins}`);
    lose_count.text(`The number of loses for the user is ${loses}`);
});

// var userChoice = userInput.text();
// var winner = compare(userChoice,computerChoice);