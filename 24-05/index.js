// string

// let str1 = ("doston");
// let str2 = ('dos \
// ton'); // back slash for new line \
// let str3 = ("dos \t ton"); // back slash and letter t for tab
// let str4 = (`dos
// ${str1}  ${str1}
// ton`); // `` backteek this one very useful and comfortable

// console.log(str4);

// charAt======

// let str = "doston"
// console.log(str[0]); // only positive numbers
// console.log(str[-1]); // cannot get minus number value
// console.log(str.charAt(-1)); //cannot get minus number value
// console.log(str.at(-1)); // can get minus number value

//============= length

// let str = "webbrain"

// console.log(str.length); // to determine the length of the data
// let num = 1223343; // we can get number's length with string's method length by this way
// console.log(`${num}`.length);

// let str = "webbrain"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// includes =============

// let str = 'doston'
// console.log(str.includes('n')); // include check given letter or word that string has or not this value

// ======== startWith-------

// let str = "doston"
// console.log(str.startsWith("d")); // check the begining of the string
// console.log(str.endsWith("n")); // check ending of string

// padEnd and padStart ===========

// let str = "doston ";
// console.log(str.padEnd(11,"."));
// console.log(str.padStart(11, "."));

// slice ===================

// let str = "doston"
// console.log(str.slice(0,3)); // this clice cuts what we need

// ===== eval

// let str = "2+2"
// console.log(eval(str)) // eval for make arifmetik between string

// trim
// let str = "   doston  " // trim delete empty spaces
// console.log(str.length) // output length 11
// console.log(str.trim().length) // output length 6

//split ===============
// let str = "doston ruslon";
// console.log(str.split(""));

// concat ====

// let str = "doston"
// console.log(str.concat("bek")) // output dostonbek

// valueOf ==============
// let str = "doston"
// console.log(new String("dostonboy"))
// console.log(new String("dostonboy").valueOf()) // to get only value 

// replace =================

// let str = "doston"
// console.log(str.replace("doston", "DOSTON")) // output DOSTON

//  loop
// let str = "doston"
// for(char of str){
//   console.log(char)
// }
