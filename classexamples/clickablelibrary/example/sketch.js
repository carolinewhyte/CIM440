var click1;

function setup() {
  // put setup code here
  createCanvas(400, 400);

  click1 = new Clickable();
  click1.locate(20, 20);
  click1.resize(100,100);

  click1.onHover = function(){
    this.color = "#AAAAFF";
    this.textColor = "#FFFFFF";
  	this.text = "Yay!";
  }

}

function draw() {
  // put drawing code here
  background(255);
  click1.draw();
}
