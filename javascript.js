// querySelector & querySelectorAl

const body = document.querySelector("body");
const div = document.createElement("div"); // Only creates in memomry! Not yet added to the DOM.

const firstBodyElement = body.firstElementChild;
console.log(firstBodyElement);

div.textContent = "This is a new div element.";
div.classList.add("tb");
div.setAttribute("style", "color:blue; background: grey;");
body.appendChild(div);
