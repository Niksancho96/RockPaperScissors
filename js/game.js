$(document).ready(function() {
    var playerName;
    var cpuChoice = genNumber();
    var userChoice;
    var userWins = 0;
    var userLose = 0;
    var ties = 0;
    
    infoBoxes();
    init();
    displayResult(playerName, userWins, userLose, ties);
    
    document.getElementById('rock').addEventListener('click', function(){
        userChoice = "Rock";
        if (compare(cpuChoice, userChoice) == "cpuWin") {
            $("#winner-text").text("You lost, the computer won with " + cpuChoice);
            userLose += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        } else if (compare(cpuChoice, userChoice) == "userWin") {
            $("#winner-text").text("You won, the computer lost with " + cpuChoice);
            userWins += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        } else {
            $("#winner-text").text("It's a tie! You both choosed the " + cpuChoice);
            ties += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        }
    });
    
    document.getElementById('paper').addEventListener('click', function(){
        userChoice = "Paper";
        if (compare(cpuChoice, userChoice) == "cpuWin") {
            $("#winner-text").text("You lost, the computer won with " + cpuChoice);
            userLose += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        } else if (compare(cpuChoice, userChoice) == "userWin") {
            $("#winner-text").text("You won, the computer lost with " + cpuChoice);
            userWins += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        } else {
            $("#winner-text").text("It's a tie! You both choosed the " + cpuChoice);
            ties += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        }
    });
    
    document.getElementById('scissor').addEventListener('click', function(){
        userChoice = "Scissors";
        if (compare(cpuChoice, userChoice) == "cpuWin") {
            $("#winner-text").text("You lost, the computer won with " + cpuChoice);
            userLose += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        } else if (compare(cpuChoice, userChoice) == "userWin") {
            $("#winner-text").text("You won, the computer lost with " + cpuChoice);
            userWins += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        } else {
            $("#winner-text").text("It's a tie! You both choosed the " + cpuChoice);
            ties += 1;
            displayResult(userWins, userLose, ties);
            cpuChoice = genNumber();
        }
    });
});

function init() {
    playerName = prompt("Please enter your name");
    playerName = setPlayerName(playerName);
    $("#greet-msg").text("Hello, " + playerName + "! This is the game Rock, paper, scissor! You know the rules, so rock on! Get it? :D");
}

function infoBoxes() {
    $("#info-tech").hide();
    $("#info-rules").hide();
    $("#info-game-stats").hide();
    
    $("#info-one").click(function() {
        $("#info-tech").stop().slideToggle();
    });
    
    $("#info-two").click(function() {
        $("#info-rules").stop().slideToggle();
    });
    
    $("#info-three").click(function() {
        $("#info-game-stats").stop().slideToggle();
    });
}

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

function setPlayerName(name) {
    if (name == null) {
        return "Player";
    } else {
        return name;
    }
}

function displayResult(wins, lose, tie) {
    $("#info-game-stats").text("Current player is: " + playerName + ", who has won: " + wins + ", has lost: " + lose + " and has tied with the bot: " + tie + " times!");
}
