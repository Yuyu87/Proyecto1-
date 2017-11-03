var soplator = new Soplator(820,10,"soplator",30,100);
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
  if(clouds.length < 1){
    clouds.push(new Cloud(10, Math.round(Math.random()*400),"cloud",2));
    console.log(clouds);
  }
}


//creamos nuevos soplidos
function createBlown(){
 if (blowns.length<5)blowns.push(new Blown(soplator.x,soplator.y,"blown", 2));
}
function deleteBlown(){ //los eliminamos cuando llegamos a x-20)
    blowns.forEach(function(blown){
   if(blown.x<=-120) blowns.shift();
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
  document.getElementById("score").innerHTML = soplator.points;
}, 1000/fps);
