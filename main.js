// DOM Exercise

let node1 = document.getElementById("node1");
    node1.textContent = "I used the getElementById(`node1`) method to access this";

let node2 = document.getElementsByClassName("node2");
    HTMLCollection 

node2s[0].textContent = 
    "I used the getElementByClassName(`node2`) method to access this";

let h3s = document.getElementsByTagName("h3"); // returns an HTMLCollection 

for (let ele = h3s) {
    ele.textContent = 
        "I used the getElementByTagName(`h3`) method to access this";
}

// Exercise 2

let parent = document.getElementById("parent")

let p = document.createElement("p");
let a = document.createElement("a");

p.textContent = "I am a <p> tag";

a.textContent = "Google Search";
a.href = "https://google.com";
a.target = "_blank_";

parent.appendChild(p);

setTimeout(() => {
    parent.insertBefore(a, p);
}, 3000);

// Exercise 3

let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1"); 

// Replace
let input = document.createElement("input");
input.value = "Replaced N1 child";

parent3.replaceChild(input, N1); 

input.focus();

// Remove
setTimeout(() => {
    parent3.removeChild(input);
}, 5000);

// Exercise 4

let container = document.querySelector("#container")
let box = document.querySelector("#box")

let x = 0;
let y = 0;

let interval = setInterval(() => {
    if (dir == "right") {
        moveX(1);
    } else if (dir == "down") {
        moveY(1);
    } else if (dir == "left") {
        moveX(-1);
    } else {
        moveY(-1);
    }
}, 10);

function moveX(unit) {
    x += unit;
    box.style.left = `${x}px`;
}

function moveY(unit) {
    y += unit;
    box.style.top = `${y}px`;
}