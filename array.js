var person = {
    //property : value
    name: "Arman",
    age : 27,
    status : "Single"
};
var num = [1,person,2,3,4,5,6];
console.log(num);

console.log(num[1].age);

num.push("Arman")
console.log(num);

num.pop();
console.log(num);

num.unshift("Raiyam")
console.log(num);