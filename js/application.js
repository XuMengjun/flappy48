var canvas = document.getElementById("game-container").getContext("2d");

var interval;

var tube = new Tube();
var bird = new Bird();

var keys = {
  32: bird.jump,
  38: bird.jump
};

function keydown(event) {
  event.preventDefault();
  keys[event.which]();
}

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
  document.addEventListener("keydown", keydown);
  interval = setInterval(render, 100);
}

init();
