let arr = [10,20,30,40,50];

let part = arr.slice(2,4);

console.log(arr);
console.log(part);

part.splice(0,1,10,"omkar",100,"patil");
// part.splice(0,1);
console.log(part);