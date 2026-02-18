// let map = new Map([
//     ["name","Omkar"],
//     ["age","24"]
// ]);

// console.log(map);

let map = new Map();

map.set("name","Omkar");
map.set("age",24);
map.set('address',"Karad");
console.log(map);
console.log(map.get("address"));
console.log(map.get("addre"));

function test(){}
map.set(test,"Function Key");

console.log(map);
console.log(map.get(test));