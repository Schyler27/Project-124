function setup(){
    video = createCapture(VIDEO);
    video.size(600 , 650);
    video.position(100 , 150);

    canvas = createCanvas(550 , 550);
    canvas.position(900 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('grey');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}