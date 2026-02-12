function greet(name){
    console.log("Hello" + name);
}

function processUser(callBack){
    callBack("Patil");
}

processUser(greet);