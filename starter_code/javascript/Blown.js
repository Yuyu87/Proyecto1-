function Blown (x,y,nombre,speed){
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
  this.speed = speed;

}
Blown.prototype.moveBlown = function(){
  this.x -= this.speed;
};

Blown.prototype.updateBlown = function() {
  this.moveBlown();
  this.element.css({
    top: this.y,
    left: this.x,
    position: "absolute"
  });
};

Blown.prototype.collision = function (soplator){
  if ($(".blown").collision(".cloud").length>0){
    clouds[0].x = 0;
    clouds[0].y = Math.round(Math.random()*400);
    console.log("IMPACTO");
    soplator.points++;
    console.log(soplator.points);
    $(".blown").addClass('display');

    return true;
    }
};
