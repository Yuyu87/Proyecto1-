var soplator = new Soplator(970,10,"soplator",30,100);
var fps = 120;
var blowns= [];
var clouds= [];
var points= soplator.points;
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

function createClouds(){
  if(clouds.length <= 1){
    clouds.push(new Cloud(10,10,"cloud",2));
    console.log(clouds);
  }
}
//Nube sale de la pantalla y resta vida;nube colisiona con soplator y resta vida.
// function cloudByeBye(){
//   if (cloud.x==965) {
//     console.log(soplator.life);
//     soplator.life -=1;
//   }
//   else if(cloud.x==soplator.x && cloud.y==soplator.y) {
//     soplator.life -=1;
//     cloud.x=-50;
//   }
// }

//creamos nuevos soplidos
function createBlown(){
 if (blowns.length<5)blowns.push(new Blown(soplator.x,soplator.y,"blown", 2));
}
function deleteBlown(){ //los eliminamos cuando llegamos a x-20)
    blowns.forEach(function(blown){
   if(blown.x<=-20) blowns.shift();
 });
}

setInterval(function(){
  createClouds();
  blowns.forEach( (blown) =>
    blown.updateBlown() );
  blowns.forEach( (blown) =>
    blown.collision(soplator)
  );
  clouds.forEach((cloud) => cloud.updateCloud());
  deleteBlown();
  soplator.updateSoplator();
  //cloudByeBye();
  //checkCollisions();
}, 1000/fps);
