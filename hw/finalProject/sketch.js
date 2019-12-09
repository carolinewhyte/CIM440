// drop down menu
var pageSelect;
var pageType = "";

// hover/title buttons
var title1;
var title2;
var title3;
var title4;

// assets: songs, images, buttons?
var friendsPic, abbyPic, julyPic, brabPic, usPic, mePic;
var lightsPic, candlesPic, tvPic, hampPic, screamPic, newsPic, scorpioPic, wallPic;
var backgroundImage;
var poem1, poem2, poem3;

var button1;
var button2;

var gif1;
var gif5;

function preload() {
  // background image
  backgroundImage = loadImage("assets/bg.png");

  // pics
  friendsPic = loadImage("assets/28.jpg");
  abbyPic = loadImage("assets/abby.JPG");
  julyPic = loadImage("assets/july.jpeg");
  brabPic = loadImage("assets/brab.jpeg");
  tvPic = loadImage("assets/tv.JPG");
  scorpioPic = loadImage("assets/scorpio.JPG");
  screamPic = loadImage("assets/scream.JPG");
  lightsPic = loadImage("assets/lights.JPG");
  candlesPic = loadImage("assets/candles.jpeg");
  usPic = loadImage("assets/us.jpeg");
  hampPic = loadImage("assets/hamp.JPG");
  mePic = loadImage("assets/me.PNG");
  newsPic = loadImage("assets/news.jpeg");
  wallPic = loadImage("assets/wall.jpeg");

  // poems
  poem1 = loadImage("assets/poem1.png");
  poem2 = loadImage("assets/poem2.png");
  poem3 = loadImage("assets/poem3.png");


  // gifs
  gif1 = createImg("assets/cute.gif");
  gif2 = createImg("assets/plant.gif");
  gif3 = createImg("assets/plants2.gif");
  gif4 = createImg("assets/moongif.gif");
  gif5 = createImg("assets/flower.gif");
}

function setup() {
  // put setup code here
  createCanvas(1224, 792);

  pageSelect = createSelect();
  pageSelect.position(150,175);
  pageSelect.option("home");
  pageSelect.option("poetry gallery");
  pageSelect.option("photo gallery");
  pageSelect.option("memory lane");
  pageSelect.changed(function(){

  pageType = pageSelect.value();

  });
   title1 = new Clickable();
   title1.locate(300, 175);
   title1.resize(200, 50);
  title1.onHover = function(){
 	this.color = "#AAAAFF";
 	this.textColor = "#FFFFFF";
  this.text = "Welcome!";
   }
   title1.onOutside = function(){
 	this.color = "#fae";
 	this.text = "Cariluna's Gallery";
 	this.textColor = "#000000";
  this.stroke = "0";
   }

   title2 = new Clickable();
   title2.locate(300, 175);
   title2.resize(200, 50);
  title2.onHover = function(){
 	this.color = "#AAAAFF";
 	this.textColor = "#FFFFFF";
  this.text = "Read Read Read!";
   }
   title2.onOutside = function(){
 	this.color = "#fae";
 	this.text = "Cariluna's Poetry";
 	this.textColor = "#000000";
  this.stroke = "0";
   }

   title3 = new Clickable();
   title3.locate(300, 175);
   title3.resize(200, 50);
  title3.onHover = function(){
 	this.color = "#AAAAFF";
 	this.textColor = "#FFFFFF";
  this.text = "Look! Art? Yay!";
   }
   title3.onOutside = function(){
 	this.color = "#fae";
 	this.text = "Cariluna's Photos";
 	this.textColor = "#000000";
  this.stroke = "0";
   }

   title4 = new Clickable();
   title4.locate(300, 175);
   title4.resize(200, 50);
   title4.onHover = function(){
   this.color = "#AAAAFF";
   this.textColor = "#FFFFFF";
   this.text = "Love Love Love!";
   }
   title4.onOutside = function(){
   this.color = "#fae";
   this.text = "Cariluna's Memories";
   this.textColor = "#000000";
   this.stroke = "0";
   }


gif1.position(710,290);
gif1.style("width", "50px");
gif1.hide();

gif2.position(830,500);
gif2.style("width", "100px");
gif2.hide();

gif3.position(500,175);
gif3.style("width", "150px");
gif3.show();

gif4.position(150,200);
gif4.style("width", "100px");
gif4.hide();

gif5.position(600,500);
gif5.style("width", "200px");
gif5.hide();

   pageType = "home";

}
song1.play();

function draw() {
  background(backgroundImage);


fill("black")


  if(pageType == "home") {
    console.log("home");
    text("Hello! Welcome 2 my blog!! I hope you can peruse and learn all about me, my art, and my favorite people! Use menu to navigate :}",660,250);
    text("Here is a picture of me!",450, 275);
    // SCALING FOR IMAGES
    image(julyPic, 400,300, julyPic.width/4, julyPic.height/4);
    gif1.show();
    title1.draw();
    gif4.hide();
    gif2.hide();
    gif5.show();
  }
  if (pageType == "poetry gallery") {
    console.log("poetry gallery");
    image(poem1, 250,250, poem1.width/3, poem1.height/3);
    image(poem2, 475,250, poem2.width/2.5, poem2.height/2.5);
    image(poem3, 700,250, poem3.width/3, poem3.height/3);

    title2.draw();
    gif1.hide();
    gif4.show();
    gif2.hide();
    gif5.hide();

  }
  if (pageType == "photo gallery") {
    image(lightsPic, 700,500, lightsPic.width/8, lightsPic.height/11);
    image(screamPic, 300,250, screamPic.width/6.5, screamPic.height/7.5);
    image(scorpioPic, 300,510, scorpioPic.width/6, scorpioPic.height/6);
    image(hampPic, 500,510, hampPic.width/6, hampPic.height/6);
    image(tvPic, 500,250, tvPic.width/16, tvPic.height/16);
    image(wallPic, 700,250, wallPic.width/7, wallPic.height/7);

    gif1.hide();
    title3.draw();
    gif4.hide();
    gif2.show();
    gif5.hide();

  }
  if (pageType == "memory lane") {
    // friendsPic, abbyPic, julyPic, brabPic, usPic, mePic;
    image(friendsPic, 200,250, friendsPic.width/8, friendsPic.height/8);
    image(abbyPic, 600,250, abbyPic.width/5, abbyPic.height/5);
    image(brabPic, 470,500, brabPic.width/6, brabPic.height/6);
    image(usPic, 200, 510, usPic.width/4, usPic.height/4);
    image(mePic, 700,500, mePic.width/5, mePic.height/5);
    gif1.hide();
    title4.draw();
    gif4.hide();
    gif2.hide();
    gif5.hide();
  }

}
