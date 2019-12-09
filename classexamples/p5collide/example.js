var hit = false;

function setup() {
createCanvas(500,500);
}

function draw() {
  background(255);
	ellipse(200,200,100,100);
	point(mouseX,mouseY);

	hit = collidePointCircle(mouseX,mouseY,200,200,100)

	print("colliding? " + hit);

}
