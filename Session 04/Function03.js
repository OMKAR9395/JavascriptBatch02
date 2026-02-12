function checkBalance(balance){
    if(balance>0){
        console.log("Available Balance RS:",balance);
    }else{
        
        console.log("Insufficient Balance",balance ?? "-120");
    }
}

checkBalance(5000);
checkBalance();