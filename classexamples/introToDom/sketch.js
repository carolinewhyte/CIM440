
function setup() {
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0")
  // # => designate an id, find an id = container0
  // .html fxn injects html or text into another html tag
  select("#container0").html("<h1>Your sketch title here!</h1>");
  // .style takes in ("css property","value");
  select("#container0").style("width", "400px"); //setting w of container0
  select("#container0").style("margin", "0 auto"); //center our container. margin: 0 auto;
  // 0 refers to top and bottom spacing of container0, auto refers to left and right spacing of container
  // to center container0, need to set a width and margin: 0 auto;
  cnv.parent("#container0");

  select("#container0").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/VQxysq3CnAg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  select('body').style("background-color", "#fae");
  //seelect('body').style("background-image", "url('assets/image.jpg')");
}

function draw() {
  background(0);
}
