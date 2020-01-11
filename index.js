
        var computerNumber=Math.floor(Math.random()*20)+1;//program generate random number between1-20
        var guessNumber;//number data 

        var input=document.getElementById("#input");
        var output=document.getElementById("output");
        
        var playerCount=0;//player's input times starting from 0;
         
         playerCount++;
      
    
          playerButton.disabled=false;

function game() {
    
    guessNumber=parseInt(input.value);//convert the player's input, the string data,to number data.
     
   // for (playerCount=0;playerCount<5;playerCount++)
    if (isNaN(guessNumber))// this if condition is to check the if user's input is a number or not.
    
    {
    output.innerHTML="<h4>You should enter a number here.</h4>";
      
    }
    
    else if( (guessNumber>20)||(guessNumber<1))//this if condition is to check if the user's input number is within range
        {
        output.innerHTML="<h4>Please enter a number between 1-20</h4>";
        }
        

    else if(guessNumber>computerNumber)// for condition that user's input number is bigger than computer random number
       {
        output.innerHTML="<h4>Please try a smaller number!</h4>";
        }
        
     
    else if( guessNumber<computerNumber)// for condition that user's input number is smaller than computer number
        
        {
        output.innerHTML="<h4> Please enter a bigger number!</h4>";
        }
        
    else if(guessNumber===computerNumber)//for condition that user's input strictly equal to computer number
        {
       output.innerHTML="<h4>You won!Game is over!</h4>";
        }


    
   /* The following code has problem but I don't know how to fix it!
   else 
      {
    outPut.innerHTML="<H4>You have tried more thatn 5 times.Game is over!</h4>"
        playerButton.disabled=true;
     } */
}
    

    















































