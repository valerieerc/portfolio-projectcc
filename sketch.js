let y; 
let textColor; 
let bgColor; 

function preload(){
    font = loadFont('Silkscreen-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textFont(font);
  textSize(95); 
  y = 0; 
  changeTextColor(); 
  changeBgColor(); 
}

function draw() {
  background(bgColor); 

  
  fill(textColor); 
  textAlign(CENTER, CENTER);
  text("THIS IS THE HOMEPAGE", width / 2, y);

  
  y += 2; 

  
  if (y > height) {
    y = 0; 
    changeTextColor(); 
    changeBgColor(); 
  }
}

// Function to change the text color to a random value
function changeTextColor() {
  textColor = color(random(255), random(255), random(255)); // Generate a random color
}

// Function to change the background color to a random value
function changeBgColor() {
  bgColor = color(random(255), random(255), random(255)); // Generate a random background color
}