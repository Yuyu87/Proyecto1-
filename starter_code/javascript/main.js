var soplator = new Soplator(970,10,"soplator",30,100);
var fps = 120;
var cloud = new Cloud(10,10,"cloud",2);
var blowns= [];
//Captura de eventos teclado.

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
    soplator.moveUp();
    break;
    case 40:
    soplator.moveDown();
    break;
    case 32:
    createBlown();
  }
};
//Nube sale de la pantalla y resta vida;nube colisiona con soplator y resta vida.
function cloudByeBye(){
  if (cloud.x==965) {
    console.log(soplator.life);
    soplator.life -=1;
  }
  else if(cloud.x==soplator.x && cloud.y==soplator.y) {
    soplator.life -=1;
    cloud.x=-50;
  }
}

//creamos nuevos soplidos
function createBlown(){
 blowns.push(new Blown(soplator.x,soplator.y,"blown", 2));
}
function deleteBlown(){ //los eliminamos cuando llegamos a x-20)
 blowns.forEach(function(blown){
   if(blown.x<=-20) blowns.shift();
 });
}

function checkCollisions (){
  blowns.forEach(function(blown){
    if ($(".blown").collision(".cloud").length>0){
      blown.element.css({display:"none"});
      console.log("le di");
    }
  });
}
// function deadCloud(){}blown toca a nube y descuenta puntos del score (crear score).


//refrescamos.
setInterval(function(){
  blowns.forEach((blown) => blown.updateBlown());
  deleteBlown();
  soplator.updateSoplator();
  cloud.updateCloud();
  cloudByeBye();
  checkCollisions();
}, 1000/fps);
