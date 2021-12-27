noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw(){
    background('#888888');
    document.getElementById("square_size").innerHTML="Width and Height of the Square will be = "+difference+" px";
    fill('#E11584');
    stroke('#E11584');
    square(noseX,noseY,difference);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("NoseX - "+noseX+","+"NoseY"+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("LeftWristX - "+leftwristX+", RightWristX - "+rightwristX+"Difference - "+difference);
    }
}