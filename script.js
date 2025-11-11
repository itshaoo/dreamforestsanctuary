function goToGarden() {
  window.location.href = "garden.html";
}

let currentImage = 0;
const images = [
  "images/sky1.jpg",
  "images/sky2.jpg",
  "images/sky3.jpg",
  "images/sky4.jpg",
  "images/sky5.jpg",
];

function showImage() {
  const img = document.getElementById("photo");
  const counter = document.getElementById("counter");
  img.src = images[currentImage];
  counter.textContent = `Image ${currentImage + 1} of ${images.length}`;
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}

const table = document.getElementById("windTable");

function changeWidth(width) {
  table.style.width = width + "px";
}

function changeBorder(spacing) {
  table.style.borderSpacing = spacing + "px"; 
  table.style.border = `${Math.max(spacing / 2, 1)}px solid #555`;
}

function changeColor(color) {
  table.style.backgroundColor = color;
}

function resetTable() {
  table.style.width = "350px";
  table.style.borderSpacing = "2px";
  table.style.border = "2px solid";
  table.style.backgroundColor = "white";
}

const canvas = document.getElementById("gardenCanvas");
const ctx = canvas.getContext("2d");

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 400, 0, 0);
  gradient.addColorStop(0, "#002f4b");
  gradient.addColorStop(1, "#0b486b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 600, 400);

  ctx.beginPath();
  ctx.arc(500, 80, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#fffde7";
  ctx.fill();

  for (let i = 0; i < 50; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(Math.random() * 600, Math.random() * 400, 2, 2);
  }

  drawSakuraTree();
}

function drawSakuraTree() {
  ctx.fillStyle = "#5d4037";
  ctx.fillRect(95, 280, 10, 120);

  ctx.strokeStyle = "#5d4037";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(100, 280);
  ctx.lineTo(140, 240);
  ctx.moveTo(100, 280);
  ctx.lineTo(60, 220);
  ctx.stroke();

  for (let i = 0; i < 40; i++) {
    const x = 60 + Math.random() * 100;
    const y = 180 + Math.random() * 70;
    const r = 3 + Math.random() * 2;
    const colors = ["#ffc1e3", "#ffb6c1", "#f48fb1"];
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
  }

  for (let i = 0; i < 8; i++) {
    const x = 50 + Math.random() * 150;
    const y = 300 + Math.random() * 80;
    ctx.beginPath();
    ctx.arc(x, y, 2 + Math.random() * 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,182,193,0.8)";
    ctx.fill();
  }
}

function drawFlowers() {
  for (let i = 0; i < 8; i++) {
    const x = Math.random() * 580;
    const y = 300 + Math.random() * 80;
    const petalColor = ["#ffb6c1", "#f48fb1", "#ce93d8"][
      Math.floor(Math.random() * 3)
    ];

    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fillStyle = petalColor;
    ctx.fill();
  }
}

function drawRipples() {
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * 580;
    const y = 300 + Math.random() * 80;
    ctx.beginPath();
    ctx.arc(x, y, 15 + Math.random() * 20, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(173,216,230,0.4)";
    ctx.stroke();
  }
}

function clearCanvas() {
  drawBackground();
}

drawBackground();
