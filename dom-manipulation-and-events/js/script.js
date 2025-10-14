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

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World from onclick event");

const btntoo = document.querySelector("#btntoo");
btntoo.addEventListener("click", () => {
    alert("Hello World from Event Listener");
});

function alertFunction()
{
    alert("Yay! You did it!!");
}

const bum = document.querySelector("#bum");

bum.onclick = alertFunction;
bum.addEventListener("click", alertFunction);
bum.addEventListener("click", function (e) {
    console.log(e);
});
bum.addEventListener("click", function (e) {
    console.log(e.target);
});
bum.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("#btnContainer > button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
    button.addEventListener("click", function (e) {
        e.target.style.background = "purple";
    });
});