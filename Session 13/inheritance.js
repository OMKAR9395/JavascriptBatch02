
class Parent{
    constructor(){
      console.log("Hello Employee Constructor")
    }
    method(){
        console.log("Parent Method");
    }
}
class child extends Parent{
    constructor(){
        super();
        console.log("CHild Constructor");
    }
    method(){
        console.log("Child Method");
        super.method();
    }
}
// let objParent = new Parent();
// objParent.method();

let childObj = new child();
childObj.method();