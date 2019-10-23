var questions = ["is iceland always covered in ice?", "what ocean lies east of the US"];
var options = ["1) true 2) false", "1) pacific 2) eastern 3) indian 4) atlantic"];
var answers = [1, 3];

var buttons = [];

var currentOption = -1;

var currentQuestion = 0;

var answerText = "";

var startTimer = false;

var interval = 5000;

var prevMillis = 0;



function setup() {
  createCanvas(400,400);

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });
  buttons[1] = createButton("2");
  buttons[1].position(40,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });
  buttons[2] = createButton("3");
  buttons[2].position(70,300);
  buttons[2].mousePressed(function(){
    currentOption = 2;
  });
  buttons[3] = createButton("4");
  buttons[3].position(100,300);
  buttons[3].mousePressed(function(){
    currentOption = 3;
  });
}

function draw() {
  background(255);
  text(questions[currentQuestion], 20,100);
  text(options[currentQuestion], 20,150);

  text(answerText, 20, 200);

  if(startTimer == true){
    text(answerText, 20, 200);
    if(millis()-prevMillis > interval){
      prevMillis = millis();
    }
  }

  if(currentOption != -1){
    // do something if currentOption not equal to -1

    if(currentOption == answers[currentQuestion]) {
      console.log("correct");
      answerText = "correct! woohoo go bonkers!";
      currentQuestion = currentQuestion + 1;

      // if currentQuestion = 2,starts over
      if(currentQuestion == questions.length) {
        currentQuestion = 0;
      }

    } else {
      console.log("incorrect");
      answerText = "incorrect! sorry b, smh";
    } // end of checking if answer correct or incorrect

    // reset to inactive state, set
    currentOption = -1;
    startTimer = true;
    prevMillis = millis();
  }




}
