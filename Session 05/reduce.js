let numbers = [10,20,30,40];

let sum = numbers.reduce((acc,curr,ind,arr)=>{
        console.log(acc,curr,ind,arr);

        return acc*curr;
},100)

console.log(sum);