let ball_x;
let speed_x;
let ball_y;
let speed_y;
let ball_l;
let speed_l;
let ball_k;
let speed_k;
let col_1;
let col_2;

function setup() {
  createCanvas(700, 700);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  ball_x = width / 2;
  speed_x = random(5, -5);

  ball_y = height / 5;
  speed_y = 3;

  ball_l = width / random(5, 1);
  speed_l = -4;

  ball_k = height / random(5, 1);
  speed_k = random(5, -5);

  col_1 = color(random(360), 150, 150);
  col_2 = color(random(360), 50, 50);
}

function draw() {
  background(9, 5);

  fill(col_1);
  circle(ball_x, ball_y, 85);
  ball_x = ball_x + speed_x;
  ball_y = ball_y + speed_y;

  if (ball_x > width) {
    speed_x = speed_x * -1;
    col_1 = color(random(360), 80, 80, 80);
  }

  if (ball_x < 0) {
    speed_x = speed_x * -1;
    col_1 = color(random(360), 80, 80, 80);
  }

  if (ball_y > height) {
    speed_y = speed_y * -1;
    col_1 = color(random(360), 100, 100, 100);
  }

  if (ball_y < 0) {
    speed_y = speed_y * -1;
    col_1 = color(random(360), 80, 80, 80);
  }

  fill(col_2);
  circle(ball_l, ball_k, 100);
  ball_l = ball_l + speed_l;
  ball_k = ball_k + speed_k;

  if (ball_l > width) {
    speed_l = speed_l * -1;
    col_2 = color(random(360), 100, 100, 100);
  }

  if (ball_l < 0) {
    speed_l = speed_l * -1;
    col_2 = color(random(360), 100, 100, 100);
  }

  if (ball_k > height) {
    speed_k = speed_k * -1;
    col_2 = color(random(360), 150, 150, 150);
  }

  if (ball_k < 0) {
    speed_k = speed_k * -1;
    col_2 = color(random(360), 100, 100, 100);
  }
}
