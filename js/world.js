function World() {
  this.bird = new Bird();
  this.tube = new Tube();
}

World.prototype.step = function() {
  this.bird.step();
  this.tube.step();
};

World.prototype.draw = function() {
  this.bird.draw();
  this.tube.draw();
};

World.prototype.hasCollision = function() {
  return bird.collides(this.tube);
};
