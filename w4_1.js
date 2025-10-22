let xp = 50;
let yp = 50;
let xs = 0.5;
let ys = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  background(100);
  circle(xp, yp, 20);
  fill(255, 20, 25);

  xp = xp + xs;
  yp = yp + ys;

  ys = ys + 0.1;

  if (yp > windowHeight) {
    ys = -ys * 0.8;
  }
  console.log(floor(yp));
}
