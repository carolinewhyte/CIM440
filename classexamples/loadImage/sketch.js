
var char1, char2;

var oneButton, twoButton;

var currentImage = 0;
var currentAnimal = char1;

function preload(){
  // load media!
  char1 = loadImage("images/puppy.jpg");
  char2 = loadImage("images/dinosaur.jpg");
}

function setup() {
  // put setup code here
   createCanvas(400,400);

   oneButton = createButton("charlie 1");
   oneButton.mousePressed(function(){
     currentImage = 0;
   });
   twoButton = createButton("charlie 2);
   twoButton.mousePressed(function(){
     currentImage = 1;
   });


   // currentAnimal = puppy; doesn't work bc puppy has no value @ this point
}

function draw() {
    // put drawing code here
    background(255);

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
