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
  if (this.x >= 890) {
    this.x = 0;
    this.y = Math.round(Math.random()*400);
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
  if (this.x==965) {
    console.log(soplator.life);
    soplator.life -=1;
  }
  else if(this.x==soplator.x && this.y==soplator.y) {
    soplator.life -=1;
    this.x=-50;
  }
};

Cloud.prototype.collision = function (soplator){
  if ($(".cloud").collision(".soplator").length>0){
    // clouds[0].x = 0;
    // clouds[0].y = Math.round(Math.random()*400);
    console.log("eeeee");
    // soplator.life--;
    // console.log(soplator.life);
    // return true;
    }
  };
