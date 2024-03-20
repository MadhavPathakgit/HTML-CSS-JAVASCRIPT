let nums = [08,20,30,40];
let min =  nums.reduce( (min,el) =>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }

});
console.log(min);


let max =nums.reduce((max,el)=>{
    if(max<el){
        return el;

    }
    else {
        return max;
    }
});
console.log(max);