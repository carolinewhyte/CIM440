
var hitX = 200;
var hitY = 200;
var hitW = 100;
var hitH = 50;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  if(mouseX > hitX && mouseX < hitX + hitW && mouseY > hitY && mouseY < hitY + hitH) {
  // if all conditions are true, do something
  console.log("In here!");
  fill("#fae");
  ellipse(200,100,10,10);
} else {
  console.log("Outside!");
  fill(255);

}
rect(hitX,hitY,hitW,hitH);
}
