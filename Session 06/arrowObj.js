let user = {
    name:"Patil",
    show:()=>{
        console.log(this.name);
    },
    show2:function(){
        this.show();
         console.log(this.name);
    }
}

user.show2();