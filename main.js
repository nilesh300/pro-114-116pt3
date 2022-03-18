noseX = 0;
noseY = 0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/pV04J174/mustache.png');
}

function setup() {
    canvas = createCanvas(350, 320);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y-30;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}


function draw() {
    image(video, 0, 0, 350, 320);
    image(clown_nose, noseX, noseY, 80, 80);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
}

function take_snapshot() {
    save('myFilterImage.png');
}