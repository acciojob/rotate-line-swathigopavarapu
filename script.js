//your JS code here. If required.
let angle = 0; // starting angle
const line = document.getElementById("line");

setInterval(() => {
  angle += 2; // increase by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);
