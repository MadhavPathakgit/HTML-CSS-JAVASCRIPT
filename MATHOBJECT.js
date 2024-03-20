// console.log(Math.PI);
// let num = Math.random();
//  num = num*10;
// num = Math.floor(num);
// num = num+1;
// console.log(num);
// guessing game
max = prompt("enter the  max number");

let random = Math.floor(Math.random()*max)+1;
// console.log(random);

let  guess=prompt("guess the number");
while(true){
    if(guess == "quit"){
        
        console.log("you  quit the game");
        break;
    }
    if(guess == random){
        console.log("you guessed it right:the random number is =",random);
        break;

    }
    else if(guess<random){
        
        guess=prompt(" the number is greater please try again! guess the number");

    }
    else if(guess>random){
        
        guess=prompt("the number is smaller please try again! guess the number");
        

    }
}

