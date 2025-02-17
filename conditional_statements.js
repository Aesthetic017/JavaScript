console.log("Conditional Statements");
console.log("if statement");

let age = 25;
if(age > 18){ console.log("you can vote")}
if(age < 18){ console.log("you can't vote")}

let mode = "light";
let color;
if(mode === "dark"){color="black"};
if(mode === "light"){color="white"};
console.log(color)

console.log("if else statement");
if(mode === "dark"){color="black"}
    else{color="white"};
console.log(color)

let a = 15;
if(a%2===0){
        console.log(a,"even")
    }
else{
    console.log(a, "odd")  
};

console.log("else if statement");
let b = 20;
if(b>10){console.log(b,"greater than 10")}
else if(b<10){console.log(b,"less than 10")}
else{console.log(b,"equal to 10")}

console.log("Practice 1:get a number from user using prompt enter a number and check whether it is multiple of 5 or not")

let number = prompt("Enter a Number");
console.log(number, " number ");
if (number % 5 === 0){console.log(number,"is a multiple of 5")}
else{console.log(number,"is not a multiple of 5")}

console.log("Practice 2: Write a code which give grades to students according to their scores")
let score = prompt("Enter your score");
let grade;
console.log(score, " score ");
if (score >= 90 && score <= 100){grade = "A grade"}
else if (score >= 80 && score < 90){grade="B grade"}
else if (score >= 70 && score < 80){grade="C grade"}
else if (score >= 60 && score < 70){grade="D grade"}
else{grade="F grade"}
console.log(grade)
