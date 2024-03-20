  let form = document.querySelector("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    // console.dir(form);
    
    // let inp =this.elements[0];
    // // console.dir(inp);
    // // console.log(inp);
    // console.log(inp.value);
   



}); 
let changeevent = document.querySelector("input");
changeevent.addEventListener("change",function(){
  console.log("change event");
  console.log("finalvalue = ",this.value);
});

let inputevent = document.querySelector("input");
inputevent.addEventListener("input",function(){
  console.log("input changed");
  console.log("finalvalue = ",this.value);
});