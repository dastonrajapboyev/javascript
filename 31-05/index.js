// advanced ARRAY ===============
// filter
// let num = [1, 2, 3, 45, 67, 0, 87];

// let res = num.filter((value, index)=>{
//   return value >10
// })

// console.log(res);

// filter with string =======

// let str = ["aplle", "ananas", "banana", "apricot", "kiwi"]

// let res = str.filter(function(value,index){
//   return value.length<= 5
// })
// console.log(res);

// filter with object --------------

// let students = [
//   { id: 1, year: 1995, name: "doston" },
//   { id: 2, year: 1994, name: "sardor" },
//   { id: 3, year: 1995, name: "jorri" },
//   { id: 4, year: 1997, name: "ruslon" },
//   { id: 5, year: 1998, name: "dilshod" },
//   { id: 6, year: 1995, name: "dostonbek" },
//   { year: 1995, id: 7, name: "dos" },
// ];

// let res = students.filter((value, index) => {
//   return value.year === 1995;
// });
// console.log(res);

// =========== sort ==========

// let num1 = [1, 2, 3, 6,8,4,0]; // in this case sort work correctly
// let num2 = [1, 2, 3, 45, 67, 23, 4, 0, 87]; // in this case sort work incorrectly
// let num3 = [1, 2, 3, 45, 67, 23, 4, 0, 87]; // in this case sort work correctly wit this callback (a,b)=> a-b

// let res = num3.sort((a,b)=> a-b)
// console.log(res);

// how to sort string with sort method =========

// let str = ["aplle", "banana", "apricot", "kiwi","ananas"]

// let res = str.sort((a,b)=> a.localeCompare(b))

// console.log(res);

// sorting object's data inside array =========

// let students = [
//     { id: 1, year: 1995, name: "alidoston" },
//     { id: 2, year: 1994, name: "sardor" },
//     { id: 3, year: 1995, name: "jorri" },
//     { id: 4, year: 1997, name: "ruslon" },
//     { id: 5, year: 1998, name: "dilshod" },
//     { id: 6, year: 1995, name: "dostonbek" },
//     { id: 7, year: 1995, name: "dos" },
//   ];

//   // let res= students.sort((a,b)=> a.year - b.year) // sorting by year
//   let res= students.sort((a,b)=> a.name.localeCompare(b.name)) // sorting by alphabit
//   console.log(res);

// find method =============

// let num1 = [1, 2, 3, 6,8,4,0]

// let res = num1.find((value)=> {
//   return value === 8
// })
// console.log(res);

// let students = [
//   { id: 1, year: 1995, name: "alidoston" },
//   { id: 2, year: 1994, name: "sardor" },
//   { id: 3, year: 1995, name: "jorri" },
//   { id: 4, year: 1997, name: "ruslon" },
//   { id: 5, year: 1998, name: "dilshod" },
//   { id: 4, year: 1995, name: "dostonbek" },
//   { id: 7, year: 1995, name: "dos" },
// ];

// let res = students.find((value) => {
//   return value.id === 5;
// })//.year/name;

// findIndex ==== 
// let res = students.findIndex((value) => {
//   return value.id === 1;
// })
// findLastIndex ==== 
// let res = students.findLastIndex((value) => {
//   return value.id === 4;
// })
// console.log(res);

// ============ forEach =============

// let num1 = [1, 2, 3, 6,8,4,0]

// let res = num1.forEach((value,index)=>{
//   console.log(value);
// })
// console.log(res);

// map =====

let num1 = [1, 2, 3, 6,8,4,0]

let res = num1.map((value,index)=>{
  console.log(value);
})