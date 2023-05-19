function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150, 150);
    video=createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video, 240, 130, 200, 200);
    

    fill(0, 550, 0);
    stroke(0, 550, 0);
    circle(50, 50, 70);
    circle(50, 430, 70);
    circle(590, 50, 70);
    circle(590, 430, 70);

    fill(246, 18, 18);
    stroke(246, 18, 18);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}



function take_snapshot(){
    save("web.png");
}