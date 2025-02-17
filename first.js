console.log("Hi Ashutosh, Lets Begin your JS Journey");
// Define Variable ,  
fullname = "Tony Stark";
console.log("Fullname is :" ,fullname); // to print defined variable, console without quotes
// whatever inside the quotes will print as it is.
isFollow = false;
console.log(isFollow)
// var variable : it can be re-declared.
var agee = 30;
var agee = 45;
console.log(agee)
//Let variable : variable cant be re-declared but can be updated, A block scope variable.
let name = " Ashutosh";
console.log(name); 
let age = 24;
age = 25
let price = 1000;
console.log(age)

// const variable = cannot be declared or updated. 

const lin = 55 ; 
// if 
// lin = 65 or const = 85 it will show error. 
console.log(lin)

// DATA TYPES in JS. 
// primitive : number, string, boolean, null, undefined, BigInt, Symbol
// non primitive : objects: 

let digit = 35;
let Name = "AShutosh "
let x = null;
let y = undefined;
console.log(digit);
console.log(Name);

const student = { name : "Ashutosh", age : 24, cgpa:8.2, isPass: true};
//console.log(student.age)
//console.log(student["age"]);
// values can be changed of keys in an object. here student is an object.
student["age"]= student["age"]+1;
console.log(student["age"]);

const product = { title: "parker", deal : true, rating: 4.5, price: 2800 }
console.log(product);

const profile = { username: "instagram", followers: 987, isFollow: true, following:780, post :27}
console.log(profile);
console.log(profile["username"]);
console.log(typeof profile["username"]);
