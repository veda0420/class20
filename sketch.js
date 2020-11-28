var movingrect,fixedrect


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="pink"
  movingrect=createSprite(100,100,80,80);
  movingrect.shapeColor="pink"
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor="green"
      fixedrect.shapeColor="green"

    }
    else{movingrect.shapeColor="pink"
    fixedrect.shapeColor="pink"

    }

  drawSprites();
}