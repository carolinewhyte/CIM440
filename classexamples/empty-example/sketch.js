var mouthX = 127;
var mouthY = 200;
var eyeSize = 15;
var irisSize = 5;
var mouthStroke = 1;
var irisColor = "#fae";
var pupilColor = 0;

var pointX = 0;
var pointY = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = width/2;

  console.log("pointX= " + pointX + " pointY= " + pointY);

}

function draw() {
  // fix the lil smear of character
  background(255);
  pointX = mouseX;
  pointY = mouseY;

  // second character
  fill(255);
  rect(pointX - 50, pointY-50, 100,100);
  ellipse(pointX-20, pointY-20, 30,30);
  ellipse(pointX+20, pointY-20, 30,30);
  //centerpoint, given pointX and pointY are 0!!!
  ellipse(pointX, pointY, 10,10);
  //happy face
  arc(pointX, pointY + 10, 50, 50, 0, PI);

  //ears
  fill("blue");
  ellipse(50,70, 75,75);
  ellipse(200,70, 75,75);
  // head
  fill("blue");
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
  // i made a change
}
