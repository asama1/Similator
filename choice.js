class choice {
  constructor(x) {
    //this.c = x;
  }

  show() {
    
    
   
    fill(1000)
    rect(goober,goober - 35 , 150, 25);
    rect(goober,goober + 35 , 150, 25);
    rect(goober,goober, 150, 25);
    fill(noker)
    textSize(16);
    text(ch1,152,170);
    text(ch2,152, 200);
    text(ch3,152, 130);
  }

  update() {
    if (
      mouseX > huttom &&
      mouseX < 300 &&
      mouseY > huttom &&
      mouseY < 170 &&
      mouseIsPressed === true
    ) {
      console.log("yes")
      goober = goober + 1000
      huttom = huttom + 1000
      noker = noker + gg
    }
  }
}
