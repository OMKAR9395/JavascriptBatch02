let set = new Set([1,2,3,4,1,2,3,4,5,6]);

console.log(set);

set.add(40);
set.add(20);
set.add(30);
set.add(1);

console.log(set);

set.delete(2);
set.delete(4);

console.log(set);
console.log(set.has(20));
console.log(set.has(80));

// set.clear();
console.log(set.size);