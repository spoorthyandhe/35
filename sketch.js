var dog,happydog,foodS, database;
var foodStock;
var dogImg;
function preload(){

dogImg=loadImage("dogImg.png");
doghappy=loadImage("dogImg1.png");

}

function setup(){

  database = firebase.database();
  console.log(database);
 
  createCanvas(500,500);

  dog=createSprite(200,315,20,20);
  dog.addImage(dogImg);
   dog.scale=0.3;

  var foodStock = database.ref('food');
  foodStock.on("value", readstock);
}

function draw(){
  background(46,139,87);
    
  if(keyWentDown(UP_ARROW)){

      writeStock(foodS);
      dog.addImage(doghappy);

    }

    drawSprites();
        noStroke();
        textSize(35) 
        fill("white")
        text("Food remaining : "+foodS,60,60);
        text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
food:x
})
}

function readstock(data){
foodS=data.val();
}
