var mouthX = 127;
var mouthY = 200;
var eyeSize = 15;
var irisSize = 5;
var mouthStroke = 1;
var irisColor = "#fae";
var pupilColor = 0;
var faceColor = "purple";

var pointX = 0;
var pointY = 0;

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = width/2;

  colorButton = createButton("click to turn orange!"); //fxn part of p5.dom library, it generate an html button
  colorButton.position(250,20);
  colorButton.mousePressed(function(){
    faceColor = "orange";
  });

}

function draw() {
  background(255);

  if (mouseX < width/2){
    background(255);
  }

  if (mouseX > width/2){
    background("pink");
  }
  pointX = mouseX;
  pointY = mouseY;

  // Partington ears
  fill(faceColor);
  ellipse(50,70, 75,75);
  ellipse(200,70, 75,75);

  // Partington head
  fill(faceColor);
  stroke("#fae");
  strokeWeight(1);
  ellipse(125,150,150,175);

  strokeWeight(irisSize);
  stroke(irisColor);

  fill(pupilColor); // adjusts inner shape color
  //ellipse(100,100, 20,20);
  rect(100,100, eyeSize,eyeSize);
  //right eye
  //ellipse(140,100, 20,20);
  rect(140,100, eyeSize,eyeSize);

  strokeWeight(mouthStroke);
  //mouth
  //rect(80,200, 100,30); //rect starts drawing from left hand corner
  ellipse(mouthX,mouthY, 100,30);

  //mouth line
  line(80,200, 175,200);
  // put drawing code here
}

function keyPressed(){
  console.log("key:" + key);
  console.log("keyCode: " + keyCode);

  faceColor = "blue";

// conditional statement: if condition = true, do what's inside curly braces
// == means one side equals the other
if(key=="y") {
// what you want to happen goes in here
  faceColor = "yellow";
}

if (key == "r") {
  faceColor = "red";
}

if (key == "w") {
  faceColor = "white";
}

if (key == "p") {
  faceColor = "pink";
}

}
function keyReleased(){
  faceColor = "purple";
}

function doubleClicked(){
  if(faceColor == "purple") {
    faceColor = "blue";
  } else {
    faceColor = "green";
  }
}
