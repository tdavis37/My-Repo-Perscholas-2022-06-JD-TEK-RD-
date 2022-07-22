// looping through querySelectorAll
const li = document.querySelectorAll("li");
for (let l of li) {
  console.log(l.innerHTML);
  l.innerText = "whatever";
}

// example of changing a class using setAttribute
let header = document.querySelector("header");
header.setAttribute("class", "blackout");

// classlist add
header.classList.add("sizeing");
header.classList.add("textSize");

//classlist remove
header.classList.remove("textSize");

// parent element remove. Demo in browser
let h1 = document.querySelector("h1").parentElement.parentElement;

//demo header.children in browser
header.children;

// append child to the body

const newPara = document.createElement("p");
newPara.innerText = "I will be added at the end";
newPara.style.color = "red";
document.body.appendChild(newPara);

newPara.classList.add("textSize");

// just append which is alot more flexible

newPara.append(
  ", some more text alskdjflkajsdflkjasldkfj",
  "!!!!!!!!!!!!!!!!!!!!!!!!"
);

//prepend to add the front of an element
newPara.prepend("I will be added to the beginning ,");

// creating an element
let h3 = document.createElement("h3");
h3.append("Welcome to the home page");

// how to remove an element

// header.remove();
// event listener demo onclick

const btn = document.querySelector("button");
const h4 = document.querySelector("h4");
btn.onclick = function () {
  h4.innerText = "You clicked me";
};

// eventlistener and a callback

const b3 = document.querySelector("#b3");
b3.addEventListener("click", function () {
  alert("you clicked b3");
  console.log("You clicked b3");
});
// you can have multiple callback using the eventlistener this way
const body = document.querySelector("body");
const darkmode = document.querySelector("#darkmode");
const lightmode = document.querySelector("#lightmode");
function setDarkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}
function setLightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}

b3.addEventListener("click", warning);
b3.addEventListener("click", dne);
darkmode.addEventListener("click", setDarkMode);
lightmode.addEventListener("click", setLightMode);

function warning() {
  alert("Warning!!!!!!!");
}
function dne() {
  alert("do not enter!!!!!!!");
}