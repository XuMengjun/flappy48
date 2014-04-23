function gameOver(interval) {
  clearInterval(interval);
}

function step(world, interval) {
  world.draw();
  collision = world.step();
  if (collision)
    gameOver(interval);
}

function init() {
  world = new World();

  var keys = {
    32: world.bird.jump,
    38: world.bird.jump
  };

  document.addEventListener("keydown", function(event){
    event.preventDefault();
    keys[event.which]();
  });

  var interval = setInterval(function(){ step(world, interval); }, 100);
}

init();
