

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);

  // 一定間隔でボールを生成
  if (frameCount % 5 === 0) { // 30フレームごとにボールを生成（約1秒間隔）
    const b = {
      x: random(width),               // ランダムなx座標
      y: random(height),              // ランダムなy座標
      size: random(10, 80),           // ランダムな大きさ
      vx: random(-3, 3),              // ランダムなx方向の速度
      vy: random(-3, 3)               // ランダムなy方向の速度
    };
    balls.push(b);
  }

  // ボールを描画して移動
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}