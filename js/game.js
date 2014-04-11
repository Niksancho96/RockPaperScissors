$(document).ready(function() {
    var cpuChoice = genNumber();
    var userChoice;
    
    console.log(cpuChoice);
    
    document.getElementById('rock').addEventListener('click', function(){
        userChoice = "Rock";
        if (compare(cpuChoice, userChoice) == "cpuWin") {
            $("#winner-text").text("You lost, the computer won with " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        } else if (compare(cpuChoice, userChoice) == "userWin") {
            $("#winner-text").text("You won, the computer lost with " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        } else {
            $("#winner-text").text("It's a tie! You both choosed the " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        }
    });
    
    document.getElementById('paper').addEventListener('click', function(){
        userChoice = "Paper";
        if (compare(cpuChoice, userChoice) == "cpuWin") {
            $("#winner-text").text("You lost, the computer won with " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        } else if (compare(cpuChoice, userChoice) == "userWin") {
            $("#winner-text").text("You won, the computer lost with " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        } else {
            $("#winner-text").text("It's a tie! You both choosed the " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        }
    });
    
    document.getElementById('scissor').addEventListener('click', function(){
        userChoice = "Scissors";
        if (compare(cpuChoice, userChoice) == "cpuWin") {
            $("#winner-text").text("You lost, the computer won with " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        } else if (compare(cpuChoice, userChoice) == "userWin") {
            $("#winner-text").text("You won, the computer lost with " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        } else {
            $("#winner-text").text("It's a tie! You both choosed the " + cpuChoice);
            cpuChoice = genNumber();
            console.log(cpuChoice);
        }
    });
    
    
});

function genNumber() {
    var cpuNum = Math.floor(Math.random() * 4);
    if (cpuNum == 1 || cpuNum == 0) {
        return "Rock";
    } else if (cpuNum == 2) {
        return "Paper";
    } else if (cpuNum == 3) {
        return "Scissors";
    }
}

function compare(cpu, user) {
    if (cpu == user) {
        return "tie";
    } else {
        if (cpu == "Rock" && user == "Paper") {
            return "userWin";
        } else if (cpu == "Rock" && user == "Scissors") {
            return "cpuWin";
        } else if (cpu == "Paper" && user == "Rock") {
            return "cpuWin";
        } else if (cpu == "Paper" && user == "Scissors") {
            return "userWin";
        } else if (cpu == "Scissors" && user == "Rock") {
            return "userWin";
        } else if (cpu == "Scissors" && user == "Paper") {
            return "cpuWin";
        }
    }
}