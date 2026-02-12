function sum(num1,num2,num3,num4,num5){
    console.log(num1,num2,num3,num4,num5)
}

sum(1,2,3,4,5);

function sub(...num){
    console.log(num,num[2]);

    if(num[1] > num[2]){
        console.log("User Authorized");
    }else{
        console.log("User Unotghorized Navigating login page");
    }
}

arr = [1,2,3,4,5,6]
sub(...arr);