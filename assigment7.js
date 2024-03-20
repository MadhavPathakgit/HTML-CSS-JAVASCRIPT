let arr = [1,2,3,4,5];
let arrayAverage =  (arr)=>{
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
       
        sum = sum+arr[i];

    }
    return sum;
}
console.log(arrayAverage(arr));
//question 2nd
let even = (n)=>{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(even(7));
