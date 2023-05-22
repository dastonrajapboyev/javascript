// garbaje collection, and this
// let obj1 = {
//   name: "doston",
//   age: 28,
// };

// let obj2 = {
//   name: "doston",
//   age: 28,
// };

/*these 2 object does not equal to each other even their keys and values same
because object is a non-primitive data type it gives us link
console.log(obj1==obj2);
  =================== */

/*there is a obj3 which is created as a variable and assigned to the obj1
that's why they are equal */
// let obj3 = obj1
// // obj1  obj2
// console.log(obj3==obj1);

//  this
// function sayHi(){
//   console.log("hi");
// }
// let user = {
//   name: "doston",
//   age: 28,
//   country: "uzbekistan",
//   sayHi() {
//     // console.log(`hi ${name}`); this is not correct
//     console.log(this);
//     console.log(`hi ${this.name}`);
//   },
// };
// user.sayHi()

// let user = {
//     name: "doston",
//     age: 28,
//     country: "uzbekistan",
//     sayHi:()=> { // we cannot use this in arrow function !!!!!!!!!! but we can wrap arrow to usual function dec
//       // console.log(`hi ${name}`); this is not correct
//       console.log(this);
//       console.log(`hi ${this.name}`);
//     },
//   };
//   user.sayHi()

// =============================================================

// constructor function

// function getName() {
//   // this.name = "doston";
//   console.log(new.target);
// }
// // console.log(new getName().name);
// new getName("doston")

