// how to add data to object from outside of object
// let name = "doston";
// let age = 28;

// const obj = {
//   name: name,
//   age: age
// }
// console.log(obj);

// object assign

// const obj = {
//   name: "test",
//   age: 28,
// };
// let obj1 = {};
// Object.assign(obj1, obj);
// console.log(obj1);

// for loop with in 

// taking object's value with for in
const obj = {
    name: "test",
    age: 28,
    job: "developer"
  };

  let name = "name"
  for(let name in obj)


  console.log(obj[name]);

  // taking object's key with for in
const obj2 = {
  name: "test",
  age: 28,
  job: "developer"
};


for(let i in obj2)


console.log(i);
