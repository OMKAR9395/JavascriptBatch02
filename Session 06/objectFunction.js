let user = {
    name:"omkar",
    age:24,
    greet:function(name){
        console.log("Hello :",this.name,"its outer value",name);
    }
}
user.greet(40);