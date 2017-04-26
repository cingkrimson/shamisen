var sounddolow;
var soundre;
var soundmi;
var soundfa;
var soundso;
var soundla;
var soundti;
var sounddohigh;
var sympno5;
var canvas;
var mute;
var lock;
var string1;
var string2;
var string3;
var string4;
var string5;
var moveCircleOneX
var moveCircleOneY
var stateOfCircleOne
var moveCircleTwoX
var moveCircleTwoY
var stateOfCircleTwo
var moveCircleThreeX
var moveCircleThreeY
var stateOfCircleThree

function preload() {
  
  // comment the line of code below and the program works.
  //sounddolow = loadSound('https://dl.dropboxusercontent.com/s/bziq4gufuakv7go/dolow.mp3');
  //sounddolow = loadSound('https://dl.dropboxusercontent.com/s/rqxhwnvxedy8avd/dolow.wav');
  //soundre = loadSound('https://dl.dropboxusercontent.com/s/wl61znn6h6qk8ly/re.wav');
  //soundmi = loadSound('https://dl.dropboxusercontent.com/s/k2yajc9b943dlaj/mi.wav');
  //soundfa = loadSound('https://dl.dropboxusercontent.com/s/fh0sqzwl3rak6d7/fa.wav');
  //soundso = loadSound('https://dl.dropboxusercontent.com/s/3z9kvu4ouwi8tr0/sol.wav');
  //soundla = loadSound('https://dl.dropboxusercontent.com/s/csdaw5rtg5py3w0/la.wav');
  
}


function setup()
{
  createCanvas(700,600);
  canvas = 1;
  mute = 1.0;
  lock = false;
  
  moveCircleOneX = 50;
  moveCircleOneY = 130;
  stateOfCircleOne = 1;
  
  moveCircleTwoX = 50;
  moveCircleTwoY = 280;
  stateOfCircleTwo = 1;
  
  moveCircleThreeX = 50;
  moveCircleThreeY = 430;
  stateOfCircleThree = 1;
}

function draw()
{
  background(255,255,255);

  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
  
  itemGrid(); 

}

function drawCanvasButtons()
{
  var x = 10;
  var y = 10;
  
  fill(0,0,0);
  rect(x,y,90,50);
  fill(255,255,255);
  text("Canvas1",x+20,y+30);

  if (mouseX > x && mouseX < x+90 && mouseY > y && mouseY < y+50 && mouseIsPressed == true)
  {
      canvas = 1;
  }
  
  fill(0,0,0);
  rect(x+100,y,90,50);
  fill(255,255,255);
  text("Canvas2",x+120,y+30);
  
  if (mouseX > x+100 && mouseX < x+100+90 && mouseY > y && mouseY < y+50 && mouseIsPressed == true)
  {
    canvas = 2;
  }
  
  if (stateOfCircleOne == 1)
  {
    moveCircleOneX = 50;
    moveCircleOneY = 130;
    fill(0,0,0);
    ellipse(moveCircleOneX,moveCircleOneY,50,50);
  }
  else if (stateOfCircleOne == 2)
  {
    fill(0,0,0);
    ellipse(moveCircleOneX,moveCircleOneY,50,50);

    moveCircleOneX = moveCircleOneX + 62;

    if (moveCircleOneX > 112)
    {
      moveCircleOneX = 112;
      stateOfCircleOne = 3;
    }
  }
  else if (stateOfCircleOne == 3)
  {
    moveCircleOneX = 112;
    moveCircleOneY = 130;
    fill(0,0,0);
    ellipse(moveCircleOneX,moveCircleOneY,50,50); 
  }
  
  if (stateOfCircleTwo == 1)
  {
    moveCircleTwoX = 50;
    moveCircleTwoY = 280;
    fill(0,0,0);
    ellipse(moveCircleTwoX,moveCircleTwoY,50,50);
  }
  else if (stateOfCircleTwo == 2)
  {
    fill(0,0,0);
    ellipse(moveCircleTwoX,moveCircleTwoY,50,50);

    moveCircleTwoX = moveCircleTwoX + 62;

    if (moveCircleTwoX > 112)
    {
      moveCircleTwoX = 112;
      stateOfCircleTwo = 3;
    }
  }
  else if (stateOfCircleTwo == 3)
  {
    moveCircleTwoX = 112;
    moveCircleTwoY = 280;
    fill(0,0,0);
    ellipse(moveCircleTwoX,moveCircleTwoY,50,50); 
  }
  
  if (stateOfCircleThree == 1)
  {
    moveCircleThreeX = 50;
    moveCircleThreeY = 430;
    fill(0,0,0);
    ellipse(moveCircleThreeX,moveCircleThreeY,50,50);
  }
  else if (stateOfCircleThree == 2)
  {
    fill(0,0,0);
    ellipse(moveCircleThreeX,moveCircleThreeY,50,50);

    moveCircleThreeX = moveCircleThreeX + 62;

    if (moveCircleThreeX > 112)
    {
      moveCircleThreeX = 112;
      stateOfCircleThree = 3;
    }
  }
  else if (stateOfCircleThree == 3)
  {
    moveCircleThreeX = 112;
    moveCircleThreeY = 430;
    fill(0,0,0);
    ellipse(moveCircleThreeX,moveCircleThreeY,50,50); 
  }

   if (stateOfCircleOne == 4)
  {
    moveCircleOneX = 50;
    moveCircleOneY = 130;
    fill(0,0,0);
    ellipse(moveCircleOneX,moveCircleOneY,50,50);
  }
  else if (stateOfCircleOne == 5)
  {
    fill(0,0,0);
    ellipse(moveCircleOneX,moveCircleOneY,50,50);

    moveCircleOneX = moveCircleOneX + 162;

    if (moveCircleOneX > 212)
    {
      moveCircleOneX = 212;
      stateOfCircleOne = 6;
    }
  }
  else if (stateOfCircleOne == 6)
  {
    moveCircleOneX = 212;
    moveCircleOneY = 130;
    fill(0,0,0);
    ellipse(moveCircleOneX,moveCircleOneY,50,50); 
  }
  
  if (stateOfCircleTwo == 4)
  {
    moveCircleTwoX = 50;
    moveCircleTwoY = 280;
    fill(0,0,0);
    ellipse(moveCircleTwoX,moveCircleTwoY,50,50);
  }
  else if (stateOfCircleTwo == 5)
  {
    fill(0,0,0);
    ellipse(moveCircleTwoX,moveCircleTwoY,50,50);

    moveCircleTwoX = moveCircleTwoX + 162;

    if (moveCircleTwoX > 212)
    {
      moveCircleTwoX = 212;
      stateOfCircleTwo = 6;
    }
  }
  else if (stateOfCircleTwo == 6)
  {
    moveCircleTwoX = 212;
    moveCircleTwoY = 280;
    fill(0,0,0);
    ellipse(moveCircleTwoX,moveCircleTwoY,50,50); 
  }
  
  if (stateOfCircleThree == 4)
  {
    moveCircleThreeX = 50;
    moveCircleThreeY = 430;
    fill(0,0,0);
    ellipse(moveCircleThreeX,moveCircleThreeY,50,50);
  }
  else if (stateOfCircleThree == 5)
  {
    fill(0,0,0);
    ellipse(moveCircleThreeX,moveCircleThreeY,50,50);

    moveCircleThreeX = moveCircleThreeX + 162;

    if (moveCircleThreeX > 212)
    {
      moveCircleThreeX = 212;
      stateOfCircleThree = 6;
    }
  }
  else if (stateOfCircleThree == 6)
  {
    moveCircleThreeX = 212;
    moveCircleThreeY = 430;
    fill(0,0,0);
    ellipse(moveCircleThreeX,moveCircleThreeY,50,50); 
  }
  
  fill(0,0,0);
  rect(x+100,y+50,5,500);
  
  if (mouseX > 110 && mouseX < 115 && mouseY > 65 && mouseY < 210 && mouseIsPressed == true)
  {
    stateOfCircleOne = 2;
  }

  if (mouseX > 110 && mouseX < 115 && mouseY > 220 && mouseY < 360 && mouseIsPressed == true)
  {
    stateOfCircleTwo = 2;
  }

  if (mouseX > 110 && mouseX < 115 && mouseY > 375 && mouseY < 490 && mouseIsPressed == true)
  {
    stateOfCircleThree = 2;
  }

  fill(0,0,0);
  rect(x+200,y+50,5,500);

  if (mouseX > 210 && mouseX < 215 && mouseY > 65 && mouseY < 210 && mouseIsPressed == true)
  {
    stateOfCircleOne = 5;
  }

  if (mouseX > 210 && mouseX < 215 && mouseY > 220 && mouseY < 360 && mouseIsPressed == true)
  {
    stateOfCircleTwo = 5;
  }

  if (mouseX > 210 && mouseX < 215 && mouseY > 375 && mouseY < 490 && mouseIsPressed == true)
  {
    stateOfCircleThree = 5;
  }
  
  fill(0,0,0);
  rect(x+300,y+50,5,500);
  
  fill(0,0,0);
  rect(x+400,y+50,5,500);
  
  fill(0,0,0);
  rect(x+500,y+50,5,500);
  
  fill(0,0,0);
  rect(x+600,y+50,5,500);
  
  fill(0,0,0);
  rect(x+100,y+50,500,5);
  
  fill(0,0,0);
  rect(x+100,y+200,500,5);
  
  fill(0,0,0);
  rect(x+100,y+350,500,5);
  
  fill(0,0,0);
  rect(x+100,y+485,500,5);
  
  fill(0,0,0);
  rect(x+620,y+100,50,50);
  fill(225,0,0);
  text("Play",645,140);
  
  //play button
  //fill(0,0,0);
  //triangle(650,460,600,625,700,575); 
  
  fill(0,0,0);
  text("Mouse X "+mouseX,630,390);
  text("Mouse Y "+mouseY,630,410);
}

function canvas2()
{
  background(125,125,125);
  drawCanvasButtons();
  
  var y = 100;
  
  fill(255,0,0);
  rect(10,10+y,90,90);
  fill(0,0,0);
  text("Play Safe",30,50+y);

  if (mouseX > 10 && mouseX < 100 && mouseY > 10+y && mouseY < 100+y && mouseIsPressed == true)
  {
    if (sympno5.isPlaying() == false)
    {
      sympno5.play();
    }
  }

  fill(255,171,1);
  rect(110,10+y,90,90);
  fill(0,0,0);
  text("Play Not Safe",120,50+y);

  if (mouseX > 110 && mouseX < 200 && mouseY > 10+y && mouseY < 100+y && mouseIsPressed == true)
  {
    sympno5.play();
  }
  
  fill(255,171,1);
  rect(210,10+y,90,90);
  fill(0,0,0);
  text("Mute",230,50+y);

  if (lock == false && mouseX > 210 && mouseX < 300 && mouseY > 10+y && mouseY < 100+y && mouseIsPressed == true)
  {
    if (mute == 0)
    {
        sympno5.setVolume(0.0);
        mute = 1;
    }
    else if (mute == 1)
    {
        sympno5.setVolume(1.0);
        mute = 0; 
    }
    lock = true;
  } 


}

function canvas1()
{
  background(125,125,125);
  
  var y = 100;
  
  drawCanvasButtons();


  
  
}

function mouseReleased()
{
   if (lock)
   {
      lock = false;
   }
}

function itemGrid()
{
  fill(50,50,50);
  rect(5,493,720,85);
  fill(125,125,125);
  rect(20,500,70,70);
  fill(125,125,125);
  rect(100,500,70,70);
  fill(125,125,125);
  rect(180,500,70,70);
}