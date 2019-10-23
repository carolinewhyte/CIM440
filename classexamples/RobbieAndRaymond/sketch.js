var mouthX = 127;
var mouthY = 200;
var eyeSize = 15;
var irisSize = 5;
var mouthStroke = 1;
var irisColor = "#fae";
var pupilColor = 0;
var pFaceColor = "blue";
var rFaceColor = "white";

var pointX = 0;
var pointY = 0;

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = width/2;
  console.log("pointX= " + pointX + " pointY= " + pointY);

  var message = "hello"; // scope of var is only available inside setup fxn,
  // so if used in the draw or any other fxn, u will receive error!! not define
  // because only in set up scole

  // creating button
  colorButton = createButton("Click to turn purple!"); //fxn part of p5.dom library, it generate an html button
  colorButton.position(20,20);
  colorButton.mousePressed(function(){
    rFaceColor = "purple";
  });

}

function draw() {

var drawMessage = "This message is in the draw loop";
// console.log(drawMessage);

  // fix the lil smear of character
  background(255);

  // use an if statement to change the background color
  // what is going to be our conditional
    // mouseX is less than but not including 200 or width/2
  if (mouseX < width/2){
    // do something
    console.log("left hand side");
    background(255);
  }
    // mouseX is greater than but not including 200 or width/2
  if (mouseX > width/2){
    console.log("right hand side");
    background("pink");
  }
  //
  if (mouseX == width/2){
    console.log("center");
    background("blue");
  }

  pointX = mouseX;
  pointY = mouseY;

  // second character (Robbie)
  fill(rFaceColor);
  rect(pointX - 50, pointY-50, 100,100);
  ellipse(pointX-20, pointY-20, 30,30);
  ellipse(pointX+20, pointY-20, 30,30);
  //centerpoint, given pointX and pointY are 0!!!
  ellipse(pointX, pointY, 10,10);
  //happy face mouth
  arc(pointX, pointY + 10, 50, 50, 0, PI);

  // Partington ears
  fill(pFaceColor);
  ellipse(50,70, 75,75);
  ellipse(200,70, 75,75);

  // Partington head
  fill(pFaceColor);
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

function  mousePressed(){
//  rFaceColor = "red";

}

function mouseReleased(){
//  rFaceColor = "white";

}

function keyPressed(){
  console.log("key " + key);
  console.log("keyCode " + keyCode);

  rFaceColor = "green";

// conditional statement: if condition = true, do what's inside curly braces
// == means one side equals the other
if(key=="y") {
// what you want to happen goes in here
  rFaceColor = "yellow";
}

if (key == "r") {
  rFaceColor = "red";
}

if (key == "w") {
  rFaceColor = "white";
}

}
function keyReleased(){
  rFaceColor = "white";
}
