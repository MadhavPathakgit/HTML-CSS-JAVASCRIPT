let arr = [1,2,3,4,5,6,2,3]
let num = 2;
for(let i = 1;i<=arr.length;i++){
    if(num == arr[i]){
arr.splice(i,1);

    }
}
console.log(arr);
//question no 2
let number = "28720200152";
for(i = 0;i<number.length;i++){
  
    
}
console.log(i);
// question no 4
let number1= prompt("enter the number");


if(number1<0){
    console.log("factorial does not exist");

}
else if(number1 == 0){
    console.log("the factorial of 0 is :1");

}
else{let factorial=  1;
    for(let i = 1;i<=number1;i++){
    
    factorial = factorial*i;
   
    }
    console.log(`the factorial is ${factorial}`);
}
// question no 5
let arr1 = [1,2,3,4,5,6,8,2,5,3]
let count= 0;

for(let i = 0;i<arr1.length;i++){
 
if(count<arr1[i]){
count= arr1[i];

}

 }
 console.log(count);


