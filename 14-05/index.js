// how to copy one object's data to a new object

// const obj1 = {
//   name: "doston",
//   age: 28
// }
// const obj2 = structuredClone(obj1)
// console.log(obj2);


const obj1 = {
  name: "doston",
  age: 28,
  job: "frontend developer",
  adress: {
    email: "1764rajabovv@gmail.com",
    country: "Uzbekistan"
  }
}
const obj2 = structuredClone(obj1)
console.log(obj2);
