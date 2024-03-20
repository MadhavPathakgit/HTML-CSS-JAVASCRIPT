h1 = document.querySelector("h1");
function changeColor(color,delay,){
  return   new Promise((resolve,reject)=>{

   
    setTimeout(()=>{
        let num = Math.floor(Math.random()*10)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color = color;

        console.log("color changed:",color);
        resolve("color changed");

    },delay);
});
}


async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("pink",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
let a = 5;
console.log(a);


}
// changeColor("red",1000)
// .then(()=>{
//     console.log("red colour was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange colour was completed");

// });

//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000);
//     });
// });
// function savtetoDb(data,success,faliure){
//     let interSpeed = Math.floor(Math.random()*10)+1;
//     if(interSpeed>4){
// success();}    else{
// faliure();    }
// }
// savtetoDb("apna coolege",
// ()=>{
//     console.log("your data was saved sucessfully")
// },
// ()=>{
//     console.log("your data is not saved sucessfully")
// }
// );




// function savtetoDb(data){
//     return new Promise((resolve,reject)=>{
//     let interSpeed = Math.floor(Math.random()*10)+1;
//     if(interSpeed>4){
//       resolve  ("sucess : data was saved");
//     }
//     else{
//         reject("failure:weak connection");
//     }

//     });
// }




// savtetoDb("apna coolege")
// .then((result)=>{
//     console.log("data 1 is saved ");
//     console.log("result of promise:",result);
//     return  savtetoDb("hello")



// })
// .then((result)=>{
//     console.log("data2 was saved");
//     console.log("result of promise:",result);
// })
// .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise:",error);
// });
