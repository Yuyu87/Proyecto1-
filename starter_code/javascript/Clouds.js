function Cloud(x, y, nombre, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.element = $("<div>").attr("class", nombre);
  this.element.css({
    top: this.y,
    left: this.x,
    position: "absolute"
  });
  $("#board").append(this.element);
}

Cloud.prototype.moveCloud = function() {
  if (this.x >= 970) {
    this.x = 0;
  } else {
    this.x += this.speed;
  }
};

Cloud.prototype.updateCloud = function() {
  this.moveCloud();
  this.element.css({
    top: this.y,
    left: this.x,
    position: "absolute"
  });
};
