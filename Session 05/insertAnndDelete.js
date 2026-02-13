let arr = [10,20,"fork","Infosystem",true,"karad",50];

arr.push(60);
arr.push(70);

console.log(arr);
// [10,20,"fork","Infosystem",true,"karad",50,60,70]

arr.unshift("omkar");
// ["omkar",10,20,"fork","Infosystem",true,"karad",50,60,70]

arr.unshift("karad");
// ["karad","omkar",10,20,"fork","Infosystem",true,"karad",50,60,70]

console.log(arr);

// ["karad","omkar",10,20,"fork","Infosystem",true,"karad",50,60,70]

arr.shift();
arr.pop();

console.log(arr);
//"omkar",10,20,"fork","Infosystem",true,"karad",50,60