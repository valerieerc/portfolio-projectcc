let song;
let sliderRate;
//let sliderRotate;
let r;
let angle = 0;
function preload() {
  song = loadSound("song.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  angleMode(DEGREES);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  //sliderRotate = createSlider
  song.play();

  //slider = createSlider(0, 100, 50);
}

function draw() {
  background(200);
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      index = (x + y * width) * 4;

      pixels[index] = map(y, 0, height, 0, 255);
      pixels[index + 1] = map(x, 0, width, 0, 255);
      pixels[index + 2] = random(255);
    }
  }

  updatePixels();
  push();
  translate(width / 2, height / 2);

  rotate(angle);

  // fill(230);
  // noStroke();
  // ellipse(0,0,360,350);

  fill(87, 88, 87);
  strokeWeight(40);
  ellipse(0, 0, 350, 330);
  stroke("black");

  fill(0, 0);
  ellipse(0, 0, 250, 230);
  strokeWeight(50);
  stroke("black");

  fill("lightyellow");
  ellipse(0, 0, 150, 140);
  strokeWeight(50);
  stroke("black");

  pop();

  angle++;
   song.rate(sliderRate.value());
  
// }

// let counter = 0;
// function mousePressed() {
//   if (counter % 2 == 0) {
//     song.play();
//   } else {
//     song.pause();
//   }

//   counter++;
}