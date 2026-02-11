// let obj = [{name:"ram"},10,{age:10,city:["karad","pune"]}];

// console.log(obj[0]?.age?.city);


let obj = {
    address:{
            city:"pune",
            pincode:{
                waraje:415503,
                nandedCity:123456,
                Pimpari:null
            }
        },
        name:"omkar"
};

console.log(obj?.address?.pincode?.nandedCity);
console.log(obj.address.pincode.Pimpari ?? "415216");
