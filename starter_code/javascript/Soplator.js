function Soplator(x, y, nombre, speed, life) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.points= 0;
  this.element = $("<div>").attr("class", nombre);
  this.element.css({
    top: this.y,
    left: this.x,
    position: "absolute"

  });
  $("#board").append(this.element);
  this.life = life;
}

Soplator.prototype.moveUp = function() {
  if (this.y <= 10) {
  } else {
    this.y -= this.speed;
  }
};

Soplator.prototype.moveDown = function() {
  if (this.y >= 500) {
  } else {
    this.y += this.speed;
  }
};

Soplator.prototype.updateSoplator = function(){
  this.element.css({
    top: this.y,
    left: this.x,
    position: "absolute"
  });
};
