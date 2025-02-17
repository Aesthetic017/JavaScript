// Operators 

/* Arithmetic Operators  +,-,*,/ */

let a = 10;
let b = 2;
console.log("addition a+b = ", a+b);
console.log("substraction a-b = ", a-b);
console.log("multiplication a*b = ", a*b);
console.log("divison a/b = ", a/b);

// Modulus Operator : % 
console.log("modulus a%b = ", a%b);

//Exponentiation operator : **
console.log("exponentiation a**b = ", a**b);

// Unary Operator Increment and Decrement ++ & --
console.log("Unary Operators")
let c = 10;
let d = 5;
console.log("c=10, d=5")
console.log("post Increment c++ = ", c++); 
console.log(" post Decrement d-- = ", d--); 

console.log("pre Increment ++a = ", ++a); 
console.log("pre Decrement --b = ", --b);

//Assignment Operators
console.log("Assignment Operators");
let e = 5;
let f = 2;
let g = 10;
let h = 3;
let j = 6;
let k = 8;
console.log(" e=5, f= 2, g=10, h=3, j=6, k=8");
e += 4;// e = e+4=9
console.log("e += 4 = ", e);
f -= 4;// f = f-4=5
console.log("f -= 4 = ", f);
g *= 4;// g = g*4=40
console.log("g *= 4 = ", g);
h /= 4;// h = h/4=0.75
console.log("h /= 4 = ", h);
j %= 4;// j = j%4=2 remainder=2
console.log("j %= 4 = ", j);
k **= 4;// k = k**4=4096 8*8*8*8
console.log("k **= 4 = ", k);

// Comparison Operators
console.log("Comparison Operators");
let m = 10;
let n = "10";
console.log("m=10 and n = 10")
// equal to == , not equal to != , equal to & type ===, not equal to& type !==
console.log(" equal to m ==n", m == n);
console.log(" not equal to m !=n", m != n); // output in boolean form , 1or0 or true or false. 
console.log(" equal to & type m ===n", m === n); // checks the data type of the value
console.log(" not equal to & type m !==n", m !== n);

// logical operators
console.log("Logical Operators");
// logical AND && 
let p = 10;
let q = 20;
console.log("p=10, q=20");
let cond1 = p<q;
let cond2 = p ==10;
console.log("cond1=p<q cond2=p==10")
console.log("cond1 && cond2", cond1 && cond2);
// logical or 
let cond3 = p>q;
console.log("cond2 || cond3", cond2 || cond3);

console.log("ternery operators");
let age = 25;
let result = age>=18?"adult":"not adult";
console.log(result)



