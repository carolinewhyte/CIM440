
var puppyImage;

var show;
var hide;

var showAndHide = false;

function preload() {
// use to load media
puppyImage = loadImage("puppies.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  show = createButton("show bb puppi");
  hide = createButton("hide bb puppi");
  show.mousePressed(function(){
    showAndHide = true;
  });
  hide.mousePressed(function(){
    showAndHide = false;
  });
}

function draw() {
  background(255);
  //put drawing code here
  if(showAndHide == true){
    image(puppyImage, 0,0,puppyImage.width/4,puppyImage.height/4);
  }
  text("click buttons 2 c pup!", 275, 100);
}
