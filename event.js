console.log("event handling--------------------")
let btn1 = document.querySelector("#btn1");
/*btn1.onclick =() => {
    console.log("button 1 clicked");
    let a = 25;
    a++;
    console.log(a)
}*/

// event listeners 
console.log("event listeners--------------------")
btn1.addEventListener("click", () => {
    console.log("button 1 clicked");});

btn1.addEventListener("click", () => {
    console.log("button 1 clicked2");});

const handler3 = () => {
        console.log("button 1 clicked3");};

btn1.addEventListener("click", handler3);


btn1.addEventListener("click", () => {
    console.log("button 1 clicked4");});

btn1.removeEventListener("click", handler3);


console.log("Create a toggle button that changes the screen to dark mode when clicked and light mode when clicked again")
let mode = document.querySelector("#mode")
let currMode = "light";
let body = document.querySelector("body")
mode.addEventListener("click", ()=> {
   if (currMode === "light"){
    currMode = "dark"
    document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light")
   } else {
    currMode = "light"
    document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode)
});

    
