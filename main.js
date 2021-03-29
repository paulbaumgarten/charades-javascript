
// Words from https://www.thegamegal.com/word-generator/
let WORDS = ['rainbow','oatmeal','strength','captain','power','silk','wig',
'encourage','Sherlock Holmes','evacuate','pizza','deep','umpire','quicksand','volcano','forbid',
'globe','iPad','translate','kite','prison','chess','welder','camping','spoon','tomorrow', 'blackbelt']

let isFullScreen = false;
let started = false;
let score = 0;
let startTime = 0;
let alpha, beta, gamma;

function preload() {}

function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight);
    frameRate(25);
}

function verifyFullScreen() {
    if (fullscreen()) {
        resizeCanvas(windowWidth, windowHeight);
        isFullScreen = true;
    }
}
function mousePressed() {
    if (!isFullScreen) {
        fullscreen(!isFullScreen);
        setTimeout(verifyFullScreen, 1000);
    }
    }

function draw() {
    if (!isFullScreen) {
        background(0);
        fill(255);
        textSize(40);
        text('Welcome to Charades', windowWidth/2, windowHeight/3);
        textSize(20);
        if (deviceOrientation != "LANDSCAPE") {
            text('Please rotate to landscape orientation', windowWidth/2, windowHeight*2/3);
        } else {
            text('Tap to go to full screen', windowWidth/2, windowHeight*2/3);
        }
    } else {
        if (! started) {
            background(0);
            fill(255);
            textSize(20);
            //text('Guess as many words as you can in 1 minute', windowWidth/2, windowHeight*1/4);
            //text('Tilt up to skip a word', windowWidth/2, windowHeight*2/4);
            //text('Tilt down if you get it correct', windowWidth/2, windowHeight*3/4);
            text(string(alpha), windowWidth/2, windowHeight*1/4);
            text(string(beta), windowWidth/2, windowHeight*2/4);
            text(string(gamma), windowWidth/2, windowHeight*3/4);
        }
    }
}

window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});