// // symbols unique id as a key in object

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// let obj = {
//   [id1]: "this is value of symbolId", // true
//   ["id2"]: "this is obj2", // undefined
//   id2: "this is obj2", // undefined
// };
// // console.log(obj[id2]);
// // ==================================
// // how to get key dynamic from object

// let id3 = Symbol("id");
// let id4 = "javascript";

// let obj2 = {
//   [id4]: "this is value of key which is dynamic", // correct
  // ["id3"]: "this is value of key which is dynamic", // incorrect undefined
  // "id3": "this is value of key which is dynamic", // incorrect undefined
  // id3: "this is value of key which is dynamic", // incorrect undefined
// };
// console.log(obj2[id4]);

// ============ how to get keys and values dybnamic of object =======

// let obje ={
//   name: "ruslon",
//   age: 26
// }
// console.log("age"in obje);
// for(value in obje){
//   console.log(value); // these are keys fo object
//   console.log(obje[value]); // these are values fo object
// }

// -------------------====== distructor =============

// let obje = {
//   name: "ruslon",
//   age: 26,
// };

// const { name, age } = obje; // in this case we don't need dot "." to call object's key or value
// console.log(name, age);

// how to distructor data  object from inside of parent object's

// let obje ={
//   name: "ruslon",
//   age: 26,
//   child:{
//     childname: "yasmina",
//     age: 1.5
//   }
// }

// const { name, age, child:{childname} } = obje; // in this case we don't need dot "." to call object's key or value
// console.log(name, age, childname);