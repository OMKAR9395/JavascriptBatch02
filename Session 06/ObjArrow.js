// let user = {
//     name:"Patil",
//     show:()=>{
//         console.log(user.name);
//     },
//     show2:function(){
//         this.show();
//          console.log(this.name);
//     }
// }

// user.show2();


let user = {
    name:"Patil",
   
    show2:function(){
       const show = ()=>{
        console.log(user.name);
    }

    show();
    }
}

user.show2();