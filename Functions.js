// functions- block of code that performs specific task can be invoked whenever neded
console.log("functions--------------------------------------------------------")
// define function and call function
function myFunction(){
    console.log("welcome to functions in JS \n We are learning JS");
}
myFunction();

//sum of two numbers 
console.log("Sum of two number using function")
function sum(a,b){
    s = a+b;
    return s;
}
let b = sum(15,78);
console.log(b);
// function parameters are local variables and can be used only inside the function
// they are like block scope

console.log("Arrow function-----")
console.log("sum function using arrow");
const arrowSum = (x,y) => {
    console.log(x+y);
}
arrowSum(4,8);

console.log("create a function using function keyword that takes a string as an argument &  returns the number of vowels in the string")
function countVowels(str){
    
    let count =0;
    for (let char of str){
        if (char === 'a' || char=== 'e' || char==='i' || char === 'o' || char === 'u')
            {
            count++;
            }
         }
        
    console.log(count);
}

console.log("forEach loop in array----------------------");
//forEach loop is used to iterate over array elements
let arr = ["pune","kop","mumbai"];
arr.forEach((val, idx, arr)=> {
    console.log(val.toUpperCase(), idx,arr);
});

// for given array of numbers, print the square of each number using forEach loop
console.log("forEach loop in array to print square of numbers----------------------");
let nums = [1,2,3,4,5];
nums.forEach((num)=> {
    console.log(num**2);
    });

// let calcSquare  =   (num)=> {
 //   console.log(num**2);} 
 // nums.forEach(calcSquare);

 // map method
 let numbers = [17,42,83,44,25];
 numbers.map((val) => {
    console.log(val**2);
 });

 //filter method
 let numbers1 = [17,42,83,44,25];
 let oddNumbers = numbers1.filter((val) => {
    return val % 2 !== 0;
    });
    console.log(oddNumbers);

 // reduce method 
 //performs some operations & reduces the array to single value. it returns that single value
 let numbers2 = [1,2,3,4,5];
 let sums = numbers2.reduce((acc, val) => {
    return acc + val;
    },0);
    console.log(sums);

console.log("Take a number n as an input from user. Create an array of numbers 1 to n.\nUse the reduce method to calculate sum of all numbers in the array.\nuse the reduce method to calculate product of all numbers in the array")    
let n = prompt("Enter a number")
let arra = [];


for (i = 1; i <= n; i++) {
    arra[i-1]=i;}
    console.log("array is " ,arra);

let sume =arra.reduce((sum,curr)=>{
    return sum + curr;
});
console.log("sum is ",sume);

let product = arra.reduce((prod,curr) => 
{
    return prod * curr;
}
);
console.log("product is " ,product);
