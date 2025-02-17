// document object modal 
// selecting with id 
let heading = document.getElementById("heading");
// selecting with class #
let headings = document.getElementsByClassName("class");
// selecting with tag name
let paras = document.getElementsByTagName("p");

//query selector
let ele = document.querySelector("p");
console.dir(ele)

let allEle = document.querySelectorAll("p")
console.dir(allEle);

//properties 
//tagName = returns a tag name 
// innerText = return the text content of the element and all its children
// innerHTML = returns plain text or HTML content in the element
//textContent = returns textual content even for hidden elements
let divs = document.querySelectorAll(".box");

idx = 0;
for( div of divs){
   div.innerText = (`the new value is ${idx}`)
   idx++;
}

console.log("dom attributes-------------------")