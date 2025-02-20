// provides an interface for fetching (sending/receiving) resources
// it uses request and response object
//the fetch() method is used to retch resource (data)
// it returns a promise that resolves to the Response object representing the response to the request, or one

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts")

const btn = document.querySelector("#btn");



const getFacts = async()=>{
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    factPara.innerText = data[3].text;
}
btn.addEventListener("click",getFacts)