function diceRoll(){
        var roll1 = Math.floor(Math.random() * 6)+1;
        
        var roll2 = Math.floor(Math.random() * 6)+1;

        var roll = roll1 + roll2;
        ("You rolled a " + roll);
        if (roll == 7 || roll == 11){
            document.getElementById("diceOutput").innerHTML = "You rolled " + roll + ". You win!";
        }
        else if (roll == 2 || roll == 3 || roll == 12){
            document.getElementById("diceOutput").innerHTML = "You rolled " + roll + ". You lose! Try Again!";
        }
        else{
         document.getElementById("diceOutput").innerHTML = "You rolled " + roll + ". Roll again!";
        }
    }
