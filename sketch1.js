let osc, osc2, playing, freq, amp, r;

let notes = [120.51, 172.95, 160.31, 180.61, 196, 220.4, 250, 301];

let fireworks = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator("circle");
  osc2 = new p5.Oscillator("cosine");

  r = new p5.Reverb();

  r.process(osc);
}

function draw() {
  background(0);

  let note = constrain(floor(map(mouseX, 0, width, 0, 8)), 0, 7);

  freq = notes[note] * 2;
  let diff = map(mouseY, height, 0, -10, 10);

  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  if (playing) {
    osc.freq(freq, 0.4);
    osc2.freq(freq + diff, 0.4);
    osc.amp(amp, 0.4);
  }
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function playOscillator() {
  osc.start();
  osc2.start();
  playing = true;
}

function mouseClicked() {
  let firework = new Firework(mouseX, mouseY);
  fireworks.push(firework);
}

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.hue = random(360);

    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(this.x, this.y, this.hue));
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }

  done() {
    for (let particle of this.particles) {
      if (!particle.isOffScreen()) {
        return false;
      }
    }
    return true;
  }
}

class Particle {
  constructor(x, y, hue) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 5));
    this.acc = createVector(0, 0.1);
    this.lifespan = 300;
    this.hue = hue;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2;
  }

  show() {
    stroke(255,this.hue, this.lifespan);
    strokeWeight(6);
    point(this.pos.x, this.pos.y);
  }

  isOffScreen() {
    return (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    );
  }
}