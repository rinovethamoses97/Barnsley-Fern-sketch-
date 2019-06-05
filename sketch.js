var x=0;
var y=0;
function setup(){
    createCanvas(600,600);
    background(0);
}
function nextPoint(x,y){
    var nextx;
    var nexty;
    var r=random(1);
    if(r<0.01){
        nextx=0;
        nexty=0.16*y;
    }
    else if(r<0.86){
        nextx=0.85*x+0.04*y;
        nexty=-0.04*x+0.85*y+1.6;
    }
    else if(r<0.93){
        nextx=0.2*x-0.26*y;
        nexty=0.23*x+0.22*y+1.6;
    }
    else{
        nextx=-0.15*x+0.28*y;
        nexty=0.26*x+0.24*y+0.44;
    }
    return [nextx,nexty];
}
function drawPoint(x,y){
    var xmap=map(x,-2.1820,2.6558,0,width);
    var ymap=map(y,0,9.9983,height,0);
    stroke(255);
    strokeWeight(4);
    point(xmap,ymap);
}
function draw(){
    drawPoint(x,y);
    var next=nextPoint(x,y);
    x=next[0];
    y=next[1];
}