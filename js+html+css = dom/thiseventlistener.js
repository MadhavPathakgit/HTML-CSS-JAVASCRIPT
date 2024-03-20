let btn = document.querySelector("button");
 
btn.addEventListener("click",function(){
    console.log(this);
    this.style.backgroundColor="blue";
})
let inp = document.querySelector("input");
inp.addEventListener("keydown",function(){
    console.log("key was pressed");
})