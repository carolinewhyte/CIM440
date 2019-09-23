var char1, char2;

var oneButton, twoButton;

var currentImage = 0;
var currentAnimal = char1;

function preload(){
  // load media!
  char1 = loadImage("charlie1.jpeg");
  char2 = loadImage("charlie2.jpeg");
}

function setup() {
  // put setup code here
   createCanvas(500,500);

   oneButton = createButton("charlie 1");
   oneButton.mousePressed(function(){
     currentImage = 0;
   });
   twoButton = createButton("charlie 2");
   twoButton.mousePressed(function(){
     currentImage = 1;
   });
}

function draw() {
    // put drawing code here
    background("#fae");

  console.log("currentImage: " + currentImage);

  if(currentImage == 0){
    // show puppy;
    currentAnimal = char1;
  }else if(currentImage == 1){
    // show dino;
    currentAnimal = char2;
  }

  image(currentAnimal, 0,0, currentAnimal.width/4, currentAnimal.height/4);
}
