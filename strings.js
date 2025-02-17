// Strings is a sequence of characters used to represent text.
// It is a collection of characters that can be accessed by index.
// Strings are immutable, meaning they cannot be changed after they are created.
// Strings are used to represent text in a program.
let str = "Hello, Ashutosh";
let str2 = 'Hello, World!';
console.log(str);
console.log(str2);

// string position or index starts from 0
console.log(str[12]);

// template literals : it is a way to create a string using backticks
let sentence = `this is template literal ${1+2}`; // $expression 
console.log(sentence);
let obj = {
    item : "pen", price: 10 
}
console.log("the cost of ", obj.item , "is ", obj.price);
let output = (`the cost of  ${obj.item}  is ${obj.price} `) 
console.log(output);

// escape characters are also part of string \n for new line  \tfor tab
console.log("hello\nAshutosh")
console.log("hello\tAshutosh")
// string methods - these are built in functions to manipulate string.
console.log("String Methods")

let str3 = "abc";
console.log(str3.toUpperCase());
let str4 = "ABC";
console.log(str4.toLowerCase());
let str5 = "Hello,Ashutosh";
console.log(str5.trim( ))
let str6="01234567"
console.log(str6.slice(1,3));
// string slicing is used to get a part of string
// it takes two parameters start and end index
console.log(str3.concat(str5))
console.log("I'am learning "+ str5 + str6 )
// replace method is used to replace a part of string with another string

console.log(str5.replace("Hello","bye"));

// charCodeAt(idx) is used to get the unicode of the character at the specified index
console.log(str5.charAt(5))

console.log("Practice : Prompt user to enter their full name. Generate a username for them based on the input. Start username with @ followed by their fullname and ending with fullname length")
let name  = prompt("Enter your full name without spaces")
console.log(name)
let username = "@"+name+name.length;
console.log(username)



