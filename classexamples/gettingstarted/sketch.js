var mouthX = 80;
var mouthY = 200;
var eyeSize = 20;


function setup() {
  // put setup code here
  // sets size of canvas
  createCanvas(500,500);
  // sets color of background
  background("green");
  background(0); //black
  background(255); //white
  background(200); //grayscale 0-255 grayish-white
  background(255,0,0); // full red
  background(0,255,0); // full green
  background(0,0,255); // full blue
  background(127,255,0); // chartruese

  fill("#fae"); // adjusts inner shape color
  stroke("violet"); // adjusts outer shape color
  ellipse(50,50,10,10);

  fill(255); // set ellipse b color to red
  stroke(0); // set ellipse b color to white
  ellipse(20,20,20,20);

}

function draw() {
  // put drawing code here. draw from upper lefthand corner
  // important part is understanding patterns

  // left eye
  strokeWeight(1);
  //ellipse(100,100, 20,20);
  ellipse(100,100, eyeSize,eyeSize);
  //right eye
  //ellipse(140,100, 20,20);
  ellipse(140,100, eyeSize,eyeSize);
  //mouth
  //rect(80,200, 100,30); //rect starts drawing from left hand corner
  rect(mouthX,mouthY, 100,30);
  //mole lol
  strokeWeight(5);
  point(30,27); //choosing area on screen, gonna choose pixel on screen

  //mouth line
  strokeWeight(1);
  line(80,215, 180,215);

  //width/2 center point of width, height/2 center point of height
  // console.log("width " + width);
  // console.log("height " + height);

  triangle(width/2, height/2, (width/2)+10,(height/2)+20, (width/2)-10,(height/2)+20);

  arc(50,50,50,50,0,PI);
  arc(300,300,50,50,0,TWO_PI);
  arc(400,400,50,50,PI+HALF_PI,0)

}
