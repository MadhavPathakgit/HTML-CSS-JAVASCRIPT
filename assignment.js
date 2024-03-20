let num = 80;

if(num%10== 0)
{
    console.log("good");
}
else{
   console.log( "bad");
}
//QUESTION 2
// let age = prompt("enter your age");
// let name = prompt("enter your name ");
// console.log(`${name} is ${age} years old`)
//Question no 3
let quarter = 2;
switch(quarter){
    case 1:
        console.log("january"+" "+","+"february"+","+"march");
        break;
        case 2:
            console.log("april"+","+"may"+","+"june");
            break;
            case 3:
                console.log("july"+" "+","+"august"+","+"september");
                break;
                
        }
        //QUESTION NO 4
        
        let str = "annn";
        if(str[0]== "A" || str[0]== "a" && str.length>= 5)
{
    console.log ("good string");
}
else{
    console.log("not good string");
}
//QUESTION NO 5
let num1 = 1000;
let num2 = 60000;
let num3 = 8000;

if( num1>num2){
    if(num1>num3){
        console.log(num1+"is the largest number");
        
    }
     else{
         console.log(num3+" is the largest number");
    }
}



 else if(num2>num3){
     console.log(`${num2} is the largest number`);
}



