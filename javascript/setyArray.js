console.time('start');
var mySet = new Array();
mySet.push(1);
for(let item of mySet) alert(mySet);
mySet.push("some text");
for(let item of mySet) alert(mySet);
mySet.push("foo");
for(let item of mySet) alert(mySet);
mySet.indexOf(1);
delete mySet[2];
for(let item of mySet) alert(mySet);

console.timeEnd('start');
//8,468s ->set
//4,782s ->Array