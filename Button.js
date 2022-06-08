class Button{
  constructor(){
    
  }
  
  show(){
    
   
     rect(153,160, 80, 50)
     text("START", 175, 190)
    
  }
  
  
  update(){
   if (mouseX > 160 && mouseX < 210 && mouseY > 180 && mouseY < 210 && mouseIsPressed === true){
   //  fill(1000)
    // text('hello', 50, 50)
     zlick = 0
     console.log('mouse be clicked')
     blackOut();
     removeElements();
}
  }
}
function blackOut(){
  fill(zlick);
}

