function mainFunction(paramFun,val){
    console.log("Starting....");

   if(val > 50){
     paramFun("Data Adding ");

    console.log("Data Added Successfully");
   }else{
    console.log("Data Failed Adding");
   }
}
function recieveData(data){
        console.log("Please Wait 5 seconds");
        console.log(data);    
}

mainFunction(recieveData,45);