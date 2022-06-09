
//let sbot = "startButton.js"
let sbot;
let a;
let zlick
let wordso
wordso = "Hello"
let line1 = ""
let line2 = ""
let line3 = ""
let line4 = ""
zlick = 220
function setup() {
  createCanvas(400, 400);
  a = new thing();
   sbot= new Button();
}

function draw() {
  background(zlick);
  text(wordso, 10, 320)
 text(line1, 10, 335)
  text(line2, 10, 350)
  text(line3, 10, 365)
  text(line4, 10, 380)
  sbot.show();
  sbot.update();
  
  
}


