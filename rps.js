    function playRPS(){
        console.log("inPlayRPS");
        var user= document.getElementById("userInput");
        var newInput = user.value.toLowerCase();
        console.log("newInput " + newInput);
            document.getElementById("newInput").innerHTML = "User chose " + newInput;
        var computerInput = computer();
        console.log("computerInput " + computerInput);
        document.getElementById("computerInput").innerHTML = computerInput;

            document.getElementById("computerInput").innerHTML = "Computer chose " + computerInput;
        if (newInput == "rock" && computerInput == "rock"){
            document.getElementById("compInput").innerHTML = "Tie!";
        }
        else if (newInput == "rock" && computerInput == "scissors"){
            document.getElementById("compInput").innerHTML ="You Win!";
        }
        else if (newInput == "rock" && computerInput == "paper"){
            document.getElementById("compInput").innerHTML ="You Lose! Computer Wins!";
        }
        else if (newInput == "paper" && computerInput == "rock"){
            document.getElementById("compInput").innerHTML ="You Win!";
        }
        else if (newInput == "paper" && computerInput == "paper"){
            document.getElementById("compInput").innerHTML ="Tie!" ;
        }
        else if (newInput == "paper" && computerInput == "scissors"){
            document.getElementById("compInput").innerHTML ="You Lose! Computer Wins!";
        }
        else if (newInput == "scissors" && computerInput == "rock"){
            document.getElementById("compInput").innerHTML ="You Lose! Computer Wins!";
        }
        else if (newInput == "scissors" && computerInput == "paper"){
            document.getElementById("compInput").innerHTML ="You Win!";
        }
        else{
            document.getElementById("compInput").innerHTML ="Tie!";
        }
}
    function computer(){
        var compInput = Math.floor(Math.random() * 3)+1;
        if (compInput == 1){
            return "rock";
    }
        else if(compInput == 2){
            return "paper";
    }
        else{
            return "scissors";
    }
}
