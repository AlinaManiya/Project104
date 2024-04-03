var guess = 1
// generation of random value
var y=Math.floor(Math.random() * 10 + 1);
// count of attempts
var x= document.getElementById("guessField").value
// until hit
else if(x > y)

{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else  
{
    guess++;
    alert("OOPS SORRY!! TRY A BIGGER NUMVER")
}
// function for the number sent by the user
 if (x > y) 
 {
 alert("CONGRATUALATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
 +guess+" GUESS ")   
 }

 function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
 }
 