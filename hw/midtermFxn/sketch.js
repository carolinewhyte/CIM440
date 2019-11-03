var names = ["Raymond", "Robbie"];
var intro = ["Meet Raymond, a quiet and blank faced monkey man.", "Raymond's side kick! Robbie is a joyful lil guy!"];
var currentName = 0;
var currentIntro = 0;

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
var charButton1;
var charButton2;

var charChoose = false;

function  preload(){
  // w sound, v important to do it in the preload
  soundFile = loadSound("assets/cutesong.mp3");

}

function setup() {
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0")
  // # => designate an id, find an id = container0
  // .html fxn injects html or text into another html tag
  select("#container0").html("<h1>Meet Raymond and Robbie!</h1>");
  // .style takes in ("css property","value");
  select("#container0").style("width", "400px"); //setting w of container0
  select("#container0").style("margin", "0 auto"); //center our container. margin: 0 auto;
  // 0 refers to top and bottom spacing of container0, auto refers to left and right spacing of container
  // to center container0, need to set a width and margin: 0 auto;
  cnv.parent("#container0");
  select('body').style("background-color", "#fae");

  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = width/2;
  soundFile.play();

  var message = "hello"; // scope of var is only available inside setup fxn,
  // so if used in the draw or any other fxn, u will receive error!! not define
  // because only in set up scope
  // creating button
  colorButton = createButton("Click to turn purple!"); //fxn part of p5.dom library, it generate an html button
  colorButton.position(20,440);
  colorButton.mousePressed(function(){
    rFaceColor = "purple";
    pFaceColor = "purple";
  });

  colorButton = createButton("Click to turn green!"); //fxn part of p5.dom library, it generate an html button
  colorButton.position(20,420);
  colorButton.mousePressed(function(){
    rFaceColor = "green";
    pFaceColor = "green";

  });
  colorButton = createButton("Click for original color!"); //fxn part of p5.dom library, it generate an html button
  colorButton.position(20,400);
  colorButton.mousePressed(function(){
    rFaceColor = "white";
    pFaceColor = "blue";
  });

  charButton1 = createButton("Raymond");
  charButton1.position(20,350);
  charButton1.mousePressed(function(){
    charChoose = false;
  });

  charButton2 = createButton("Robbie");
  charButton2.position(100,350);
  charButton2.mousePressed(function(){
    charChoose = true;
  });
}

function draw() {
  background("#fae");

if(charChoose == true){
  // second character (Robbie)
  fill(rFaceColor);
  rect(pointX - 200, pointY-100, 100,100);
  // eyes
  fill(255);
  ellipse(pointX-175, pointY-70, 30,30);
  ellipse(pointX-125, pointY-70, 30,30);
  //centerpoint, given pointX and pointY are 0!!!
  ellipse(pointX-150, pointY-50, 10,10);
  //happy face mouth
  arc(pointX - 150, pointY - 50+ 10, 50, 50, 0, PI);

  textStyle(NORMAL);
  textSize(12);
  text(names[currentName+1], 200,200);
  text(intro[currentIntro+1],200,220);

}else{
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

  textStyle(NORMAL);
  textSize(12);
  text(names[currentName], 200,200);
  text(intro[currentIntro], 200,220);

}
}
