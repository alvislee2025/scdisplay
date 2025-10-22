function setup() {
  createCanvas(500, 500, WEBGL);

  describe("A purple cube wireframe spinning on a black canvas.");
}

function draw() {
  background(0);

  // Style the box.
  noFill();
  stroke(100, 100, 240);

  // Rotate the coordinates.
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Draw the box.
  box(55);
}
