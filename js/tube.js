function Tube(world) {
  this.gapHeight = world.gapHeight;
  this.x = world.x + world.width;
  this.topTubeHeight = (world.height - this.gapHeight);
}

Tube.prototype.draw = function() {
}
