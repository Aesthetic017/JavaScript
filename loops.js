// loops : execute something for multiple times
// for loop
for ( let i=1; i<=10;i++){
    console.log("Ashutosh");
}

// calculate sum of 1 to n
let n = 10;
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum +i;
}
console.log(sum)

// infinite loop
// while loop
console.log(" while loop")
let j=1;   
while (j<=5){
    console.log("j=",j);
j++;
}

console.log("do while loop")
k = 1;
do {
    console.log("k =", k);
    k++;
}while(k<=10);

//console.log("for let val of strVar loop")
console.log("for of loop")
let str= "Ashutosh";
let size = 0;
for(let i of str){ // iterator > characters
    console.log(i);
    size ++;
}
console.log(size)

console.log("for-in loop")
let student = {
    name: "Ashutosh",
    age: 25,
    roll: 1,
    isPass: true
}
for (let i in student) {
    console.log(i, student[i]);
}

console.log("Print all odd numbers from 1 to 100")
for(let num=0; num<=10; num++){
    if(num%2!==0){ 
        console.log(num);
    }
}

console.log("Create a game where you start with any random game number. ASk the user to keep guessing game number until the user enters correct value ")
let game_number = 15;
let userNo = prompt("Guess game number");
while (userNo != game_number){ 
    userNo = prompt("Guess game number");
   
}
console.log("You guessed correct number,Congratulations")


