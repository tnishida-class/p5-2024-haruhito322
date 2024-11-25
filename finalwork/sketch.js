// 最終課題を制作しよう
let i, j, x, y
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  const grey = color(105)
  const green = color(95, 158, 160)
  background(165, 42, 42);

  noStroke()
  fill(105)
  rect(40, 500, 100, 325);
  rect(180, 600, 90, 225);
  rect(300, 500, 150, 325);
  rect(500, 400, 225, 425);
  rect(750, 700, 150, 125);
  rect(1000, 450, 120, 375);
  rect(1150, 500, 150, 325);
  rect(1300, 600, 120, 225);

  for (i = 2; i < 7; i++) {
    for (j = 20; j < 37; j++) {
      if (i % 2 === 1 && j % 2 === 1) {
        fill(green)
      } else {
        fill(grey)
      }
      rect(i * 20, j * 25, 20, 25);
    }
  }
  for (j = 24; j < 33; j++) {
    if (j % 2 === 1) {
      fill(green)
    } else {
      fill(grey)
    }
    rect(210, j * 25, 30, 25);
  }
  for (i = 10; i < 15; i++) {
    for (j = 20; j < 37; j++) {
      if (i % 2 === 1 && j % 2 === 1) {
        fill(green)
      } else {
        fill(grey)
      }
      rect(i * 30, j * 25, 30, 25);
    }
  }
  for (i = 20; i < 29; i++) {
    for (j = 16; j < 33; j++) {
      if (i % 2 === 1 && j % 2 === 1) {
        fill(green)
      } else {
        fill(grey)
      }
      rect(i * 25, j * 25, 25, 25);
    }
  }
  for (i = 25; i < 30; i++) {
    for (j = 28; j < 33; j++) {
      if (i % 2 === 0 && j % 2 === 1) {
        fill(green)
      } else {
        fill(grey)
      }
      rect(i * 30, j * 25, 30, 25)
    }
  }
  for (i = 25; i < 28; i++) {
    for (j = 15; j < 33; j++) {
      if (i % 2 === 0 && j % 2 === 0) {
        fill(green)
      } else {
        fill(grey)
      }
      rect(i * 40, j * 25, 40, 25)
    }
  }
  for (i = 23; i < 26; i++) {
    for (j = 20; j < 37; j++) {
      if (i % 2 === 0 && j % 2 === 1) {
        fill(green)
      } else {
        fill(grey)
      }
      rect(i * 50, j * 24, 50, 25)
    }
  }
  for (j = 24; j < 33; j++) {
    if (j % 2 === 1) {
      fill(green)
    } else {
      fill(grey)
    }
    rect(1390, j * 25, 30, 25)
  }

  atomicbomb(645, 100, 190)
  atomicbomb(670, 400, 90)
  atomicbomb(690, 600, 30)
  atomicbomb(700, 700, 5)

  let balls = []
  if (frameCount % 1 === 0) {
    const b = {
      x: random(width),
      y: random(height),
      size: random(10, 30),
      vx: random(-1, 1),
      vy: random(-1, 1)
    };
    balls.push(b);
  }
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    fill(0)
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function atomicbomb(x, y, z) {
  fill(0)
  ellipse(x, y, z)
  ellipse(x + z / 6, y, z)
  ellipse(x + z / 3, y, z)
  ellipse(x + z / 2, y, z)
  ellipse(x + z * 2 / 3, y, z)
  ellipse(x + z * 5 / 6, y, z)
  rect(x, y - z / 2, z * 5 / 6, z)
  rect(x + z * 11 / 9, y - z / 2, z / 3, z)


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

