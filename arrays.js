// arrays are collection of items
let marks = [ 98,87,85,74,46,52,51];
console.log(marks);

let heroes = ["spiderman", "hulk", "ironman"];
console.log(heroes);

console.log("array indeces")
console.log(marks[4]);

// looping over the array   
console.log("looping over arrays-----------------------------------")
for (i=0; i<marks.length; i++) {
    console.log(marks[i]);
}
for (let hero of heroes){
    console.log(hero)
}

console.log("For given array with marks of students, find average marks of entire class")
let sum = 0; 

for (let val of marks ){
    sum += val;
}
console.log(sum)
avg = sum / marks.length; 
console.log(`avg marks of entire class = ${avg}`);

console.log("For given array with prices of 5 items , all items have an offfer of 10% OFF on them. Change the array to store final price after applying offer")
let prices = [125, 260, 370, 480, 590];
console.log('prices are ', prices)
let idx = 0;
for (let price of prices){
    let offer = price /10;
    prices[idx]=prices[idx]-offer;
    console.log(`value after offer = ${prices[idx]}`)
 idx++;
}
console.log(prices)

// arrays method
console.log("array methods-------------------------------------------")
// push method is used to add new element at the end of array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
fruits.push("date");
console.log(fruits);
//pop()
fruits.pop();
console.log(fruits);
//toString()
console.log(marks.toString());

// concat() joins multiple arrays & return result
console.log(marks.concat(prices));

//unshift method add element at start
let aa = heroes.unshift("ashu");
console.log(aa);

let arr = [ 1,2,3,4,5,7]
//add element
arr.splice(2,0,101)
console.log(arr);
//delete item
arr.splice(2,1);
console.log(arr);
//replace 
arr.splice(2,1,100);
console.log(arr);

console.log("create an array to store companies, 1remove first company from array 2remove uber and add ola in its place, add amazon at the end")
let companies = ["bloomberg","google","uber","netflix","ibm","microsoft"];
console.log("companies are",companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies);

companies.push("amazon");
console.log(companies);
