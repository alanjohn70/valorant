// agents.js

const images = [
  "images/val_agent3.jpg",
  "images/val_agent4.jpg"
];

let currentIndex = 0;
const imgElement = document.getElementById("agentImage");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
}, 2000);