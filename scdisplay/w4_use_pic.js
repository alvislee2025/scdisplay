let r = 0;
let x = 50;
let y = 50;
let xs = 1;
let ys = 1;
let img;

function setup() {
  // frameRate(30);
  //降低framrate
  createCanvas(windowWidth, 700);
  background(200);
  img = loadImage("/character-mario-2x.png");
}
function draw() {
  line(0, 350, windowWidth, 350);
  background(200);
  image(img, x, y, 90, 90);
  // ellipse(x, y, 5);
  x = x + xs;
  y = y + ys;
  xs = xs + 0.000005;
  ys = ys + 0.5;

  //做拋物線

  // xs = xs + 0.003;
  // ys = ys + 0.015;

  //要反彈怎麼半

  // if (y > 350) {
  //   ys = -ys;
  // }

  //在更真實一點

  if (y > 350) {
    ys = -ys * 0.7;
    //想一下怎麼讓他可以繼續很自然地彈跳
    y = 350;
  }

  // 不了解數據的變化可以加consloe
  // console.log(y);

  // 讓他會停下來，享一下最後的點在哪
  // 取整數
  console.log(floor(y), floor(x));

  if (x > 350) {
    ys = 350;
  }

  if (x >= 350) {
    x = 350;
  }

  //大家可以去調x或y去理解
}
