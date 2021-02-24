import { boxOps } from "./boxOperations.js";

var canvas = document.querySelector("#myCanvas");

window.requestAnimationFrame(gameController);

let startTime = performance.now();
boxOps.generateBox();

function gameController(timer) {
  let elapsed = timer - startTime;
  if (elapsed > 2000) {
    startTime = timer;
    boxOps.moveBoxForward();
  }
  window.requestAnimationFrame(gameController);
}

canvas.addEventListener("click", function userSmashesABox(event) {
  let canvasLeft = canvas.offsetLeft;
  let canvasTop = canvas.offsetTop;

  let x = event.pageX - canvasLeft;
  let y = event.pageY - canvasTop;
  console.log(`user clicked on ${x} and ${y}`);
});
