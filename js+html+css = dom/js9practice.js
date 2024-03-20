let para1 = document.createElement('p');
para1.innerText = "hey im red";
document.querySelector('body').append(para1);
para1.classList.add("red");


let h3 = document.createElement('p');
h3.innerText = "hey im blue";
document.querySelector('body').append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para3  = document.createElement("p");
h1.innerText = "im in a div";
para3.innerText = "me tooo";

div.append(h1);
div.append(para3);
// div.style.backgroundColor = "red";
// div.style.border = solid;
div.classList.add("box");
document.querySelector('body').append(div);


