let arr = [1,2,3,4,5,6];

const  square = arr.map((num) => num*num);
console.log(square);
let sum = square.reduce((acc,el)=> acc+el,0);
console.log(sum);
let average = sum/arr.length;
console.log(average);

// question number 2
let arr1 = [1,2,3,4,5,6,7,];
const newarray = arr1.map((el)=> el+5);
console.log(newarray);


// question no 3
let arr2 = ["madhav","keshav","nidhi"];
let newarray1= arr2.map((string)=> string.toUpperCase());
console.log(newarray1);
//question no 5
let object1 = {b:90};
 let object2 = { a:8}
let mergeObject={...object1,...object2};
// mergeObject = {...object2};
console.log (mergeObject);