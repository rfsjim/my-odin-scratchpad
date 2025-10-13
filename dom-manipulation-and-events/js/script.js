// Your JavaScript File

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I’m red!";

container.appendChild(redParagraph);;

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I’m a blue h3!";

container.appendChild(blueH3);

const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.borderColor = "black";
blackPinkDiv.style.borderStyle = "solid";
blackPinkDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

blackPinkDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";

blackPinkDiv.appendChild(p);

container.appendChild(blackPinkDiv);