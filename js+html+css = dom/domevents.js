let btn = document.querySelectorAll("button");
// console.dir(btn);
for(btn of btn){

    //     btn.onmouseenter = ()=>{
    //         console.log("u hovered a btn");
    // }
    btn.addEventListener("click",sayhello);
    btn.addEventListener("dblclick",sayhelloo);
    
}

 function sayhello(){
        console.log("btn was clickeddd");}
        function sayhelloo(){
            console.log("btn is clickeddd double time");}

