object=[];
status='';

function preload(){

}

function setup(){
canvas= createCanvas(500,300);
video=createCapture(VIDEO);
video.hide();
}

function start(){
objectDetector= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML='Status: Detecting Objects';
}

function modelLoaded(){
console.log('Model is loaded');
status=true;

}

function draw(){
image(video,0,0,500,300);
}