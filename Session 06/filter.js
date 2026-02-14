let arr = [1,2,3,4,5,6];

let even = arr.filter((val,ind,localArr)=>{
    console.log(val,ind,localArr);
    return val % 2 === 0;
})

console.log(even);