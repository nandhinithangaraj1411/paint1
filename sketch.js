var database;
drawing=[];

var ref;
 function setup(){
   database=firebase.database();
   console.log(database)
   ref=database.ref('drawing')
 
   createCanvas(400,400)
   ref=ref.on("value",readPosition,showError)
   var clearButton = createButton('ERASER');
   clearButton.mousePressed(clearDrawing);

}
function draw(){
  background("skyblue");
 
  strokeWeight(4);
  stroke(244);
  noFill();
  beginShape();
  for(i=0;i<drawing.length;i++){
     vertex(drawing[i].x,drawing[i].y)
    
  }

endShape();}

function mouseDragged(){
   var point={
    x: mouseX,
    y: mouseY,
  }
  drawing.push(point);
  database.ref('drawing').set({
    'd':drawing
  })
}
function readPosition(data){
  drawing=data.val().d
}
function showError(){
  console.log("errorOccured")
}
function clearDrawing(){
  drawing=[]
}

