let mobilenet;
let video;
let label = '';
let makers = ':Prediction(Probability):';

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    prob = results[0].probability.toFixed(3);
    label = results[0].className + "(Prob:" + prob + ")";
    //label = results[0].label;
    mobilenet.predict(gotResults);
  }
}

// function imageReady() {
//   image(puffin, 0, 0, width, height);
// }

function setup() {
  var canvas = createCanvas(450, 400);
  canvas.parent('sketch-holder');
  video = createCapture(VIDEO);
  video.size(450, 350);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
  background(255);
  image(video,0,0,450,350);
  fill(0);
  textSize(15);
  text(makers,140, height-25);
  text(label, 120, height - 8);
}