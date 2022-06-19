
class Button {
  constructor(x) {
    this.c = x;
  }

  show() {
    rect(153, 160, 80, 50);
    text("START", 175, 190);
  }

  update() {
    if (
      mouseX > 160 &&
      mouseX < 210 &&
      mouseY > 180 &&
      mouseY < 210 &&
      mouseIsPressed === true
    ) {
      this.c = this.c + 1;
      zlick = 0;
      console.log(this.c);
    }
  }
}
