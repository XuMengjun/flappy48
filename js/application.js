var canvas = document.getElementById("game-container").getContext("2d");

var interval;

var tube = new Tube();
var bird = new Bird();

function draw() {
  tube.draw();
  bird.draw();
}

function gameOver() {
  clearInterval(interval);
}

function progress() {
  tube.progress();
  bird.progress();
  if (bird.collides(tube))
    gameOver();
}

function render() {
  draw();
  progress();
}

function init() {
  interval = setInterval(render, 100);
}

init();
