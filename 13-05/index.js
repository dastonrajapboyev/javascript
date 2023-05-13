// how to add data to object, change data, delete, freeze

// add data
// let account = {
//   name: "Doston",
//   surname: "Radjapboyev",
// };
// account.age = 28;
// console.log(account);

// delete data
// let account = {
//   name: "Doston",
//   surname: "Radjapboyev",
// };
// delete account.age;
// console.log(account)

// freeze data
// let account = {
//   name: "Doston",
//   surname: "Radjapboyev",
// };
// Object.freeze(account);
// account.age = 28;
// console.log(account);

// freeze only add and delete data but we can change data
// let account = {
//   name: "Doston",
//   surname: "Radjapboyev",
// };
// Object.seal(account);
// account.name = "Dostonbek"
// account.age = 28;
// console.log(account);