
let c=0;
let sbot = "startButton.js";
let wordso; 
let a;
let zlick;
zlick = 220;
let bonk;

wordso = "Hello"
let line1 = ""
let line2 = ""
let line3 = ""
let line4 = ""
function preload(){
  img = loadImage('bufftbh.jpg')
}
function setup() {
  createCanvas(400, 400);
  bonk = new haracters()
   sbot= new Button(c);
}

function draw() {

  background(0);
  // gets rid of the button entirely
  if (sbot.c<1){
    sbot.show();
  sbot.update();
  } else {
  background(145);
  image(img,-100,0);
    rect(4, 300, 390, 95)
        text(wordso, 10, 320)
 text(line1, 10, 335)
  text(line2, 10, 350)
  text(line3, 10, 365)
text(line4, 10, 380)
    bonk.show()
    bonk.update()
rect(150, 150, 150, 25);
    textSize(16);
    text("Wanna hit the gym?", 152,170);
  }
  
