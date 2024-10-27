let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  //frameRate(30);
}

function draw() {
  background("darkcyan");
  if (flowers.length > 0) {
    for (i = 0; i < flowers.length; i++) {
      flowers[i].show();
    }
  }
}

function mousePressed() {
  flowers.push(new Flower(mouseX, mouseY));
}

class Flower {
  
  constructor(x, y) {
    this.petalColor = random([
      "white",
      "lavender",
      "pink",
      "lightyellow",
      "lightblue",
      "olivedrab",
      "palegoldenrod",
      "papayawhip",
      "plum",
      "rosybrown",
      "sandybrown",
      "tan",
      "turquoise",
      "cadetblue",
      "cornflowerblue",
      "darksalmon",
      "deepskyblue",
      "honeydew",
    ]);

    this.centerColor = random([
      "orange",
      "gold",
      "coral",
      "darkmagenta",
      "darkred",
      "darkslategray",
      "deeppink",
      "dodgerblue",
      "fuchsia",
      "goldenrod",
      "indigo",
      "lightcoral",
      "lightseagreen",
      "lightsteelblue",
      "mediumslateblue",
      "midnightblue",
    ]);

    this.MIN_PETALS = 6
    this.MAX_PETALS = 20
    
    this.numPetals = int(random(this.MIN_PETALS, this.MAX_PETALS));

    this.angle = TWO_PI / this.numPetals;

    this.spinInc = 0.0;

    this.spun = false;

    this.locX = x;
    this.locY = y;
  }

  show() {
    this.drawFlower();
    this.spin()
  }

  drawFlower() {
    push();
    translate(this.locX, this.locY);
    noStroke();

    fill(this.petalColor);

    for (let i = 0; i < this.numPetals; i++) {
      ellipse(0, 40, 20, 80);
      rotate(this.angle + this.spinInc);
    }

    fill(this.centerColor);
    ellipse(0, 0, 30, 30);

    pop();
  }

  spin() {
    if (this.spun == false) {
      this.spinInc = this.spinInc + PI / 4 / this.numPetals;
      if (this.spinInc >= PI / 8) {
        this.spinInc = 0.0;
        this.spun = true;
      }
    }
  }
}