var me
var song
var playMode = 'restart';

function preload(){
  me = loadImage('assets/rain.jpg')
  song = loadSound('assets/memories.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  song.play();
image(me,windowWidth, width/2, height/2)
me.loadPixels()
noStroke()
background(0,random(10),random(255))
}

function draw() {

rx = random(0,width)
ry =random(0,height)
console.log(rx,ry);

pixColor = me.get(rx,ry)

sz = map(mouseX,0,width,1,50)

fill(pixColor)
ellipse(rx,ry,sz,sz)

}

function keyPressed(){
    clear()
    background(0,random(10),random(255))

}

function mousePressed(){
    clear()
    background(0,random(10),random(255))
}
