
// spread operator ===================

let obj ={
  name: "ruslon",
  age: 26,
  child:{
    childname: "yasmina",
    age: 1.5
  },
  // name: 'new name'
}
console.log({...obj, name: "ruslonbek"});