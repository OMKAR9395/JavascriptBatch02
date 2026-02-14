let student = [
    {name:"omkar",marks:35},
    {name:"harry",marks:50},
    {name:"raj",marks:70},
    {name:"potter",marks:30},
    {name:"shubham",marks:25}
]

let passed = student.filter((val)=> val.marks >= 35);

console.log(passed);