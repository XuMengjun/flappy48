function jump() {
}

var keys = {
  32: jump,
  38: jump
};

function keydown(event) {
  event.preventDefault();
  keys[event.which]();
}

document.addEventListener("keydown", keydown);
