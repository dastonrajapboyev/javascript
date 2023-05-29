// array
// let ar = [1, 4, 232, "doston", function test() {}, null, {}, true];

// console.log(ar);
// console.log(ar[0]);console.log(ar[1]);
// console.log(ar[2]);console.log(ar[3]);console.log(ar[4]);
// console.log(ar[5]);console.log(ar[6]);console.log(ar[7]);
// console.log(ar[ar.length-1]); // to get last element of array

//============ at method

// let ar = [1, 4, 232, "doston", function test() {}, null, {}, true];

// console.log(ar.at(-1));
// console.log(ar.at(-2));
// console.log(ar.at(-3));
//===============new array method

// let ar = [1, 4, 232, "doston", function test() {}, null, {}, true];

// let ar = new Array();
// let arr = [];
// console.log(ar);
// console.log(arr);

// how to assign data to array from outside================

// let ar = [];
// ar[2] = "doston";
// console.log(ar);

// how to change array's index data====================

// let ar = ["doston",28]

// ar[0]= "dostonbek"
// console.log(ar);

// add information between data inside array with join()========

// let ar = ["doston", 28, { name: 'doston', age: 28 }];

// console.log(ar.join("/"));

// how to add 2 array to each other with concat method ================
// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7];

// console.log(ar1.concat(ar2));

// loops in array ================

// let ar1 = ["doston", "ruslon", "mubina", "muslima","yasmina","fotima","mustafo"];
// for (i=0; i < ar1.length; i++) {
//   console.log(ar1[i]);
// } // this way is an old way to loop

//  for of method =============

// let ar1 = ["doston", "ruslon", "mubina", "muslima","yasmina","fotima","mustafo"];

// for(value of ar1){ // "of" to get element of array
//   console.log(value); // this way is a new way
// } 

// for(value in ar1){ // "in" to get element of array
//   console.log(value);
// }

// ARRAY METHODS =============

//PUSH =================
// let arr =[1,2,3,4,5]
// arr.push(6,7,8,9); // push add element to array
// console.log(arr);

// POP =================
// let arr =[1,2,3,4,5]
// arr.pop(); // pop delete last element of array
// console.log(arr);

// unshift method ========

// let arr =[1,2,3,4,5]
// arr.unshift(0) // unshift add element begining of array
// console.log(arr);

// shift method======

// let arr =[1,2,3,4,5]
// arr.shift() // shift delete element at the begining of array
// console.log(arr);

// splice method =================

// let arr =[1,2,3,4,5]
// arr.splice(0) // splice can delete and add element to array
// arr.splice(0,2) //from where to where
// arr.splice(0,2, 222) // splice can delete and add element to array first and nd param del. rd param add
// console.log(arr);

// slice method ==========

// let arr =[1,2,3,4,5]
// arr.slice(0,2) // slice doesn't change array and only cut data from array
// console.log(arr);

// indexOf () method ============

// let arr =[1, 4,2,3,4,5]
// console.log(arr.indexOf(2)); // we can find index of element which we need
// console.log(arr.indexOf(2,1)); // we can find index of element which we need

// lastindexOf () method ============


// let arr =[1, 2,3,5,1]
// console.log(arr.indexOf(1)); // indexOf search from begining
// console.log(arr.lastIndexOf(1)); // lastIndexOf search from the end

// join method =========

// let arr =[1, 2,3,5,1]
// console.log(arr.join("-"));// split add something we need between elements of array and convert array to string

// split method ==========

// let arr ='1, 2,3,5,1'
// console.log(arr.split()); // split convert string to array 

// reverse method ===========

// let arr =[1, 2,3,5,]
// console.log(arr.reverse());