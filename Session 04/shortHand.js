// function checkResult(marks){
//     if(marks>=35){
//       return "pass";
//     }else{
//        return "fail";
//     }
// }

// const checkResult = (marks)=>{
//      if(marks>=35){
//       return "pass";
//     }else{
//        return "fail";
//     }
// }

const checkResult = (marks)=> marks >= 35 ? "pass" : "fail";

console.log(checkResult(20))
console.log(checkResult(40))