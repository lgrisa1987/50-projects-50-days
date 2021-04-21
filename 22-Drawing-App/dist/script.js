"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Roboto"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});
var size = 10,
    color = "black",
    isPressed,
    x,
    y;

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    canvas = select('#canvas'),
    sizeEl = select('#size'),
    colorEl = select('#color'),
    ctx = canvas.getContext('2d'),
    drawCircle = function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
},
    drawLine = function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
},
    getIfPressed = function getIfPressed(ifpressed, value1, value2) {
  isPressed = ifpressed;
  x = value1;
  y = value2;
},
    updateSizeOnScreen = function updateSizeOnScreen() {
  return sizeEl.textContent = size;
};

canvas.addEventListener('mousedown', function (e) {
  getIfPressed(true, e.offsetX, e.offsetY);
});
canvas.addEventListener('mouseup', function (e) {
  getIfPressed(false, undefined, undefined);
});
canvas.addEventListener('mousemove', function (e) {
  if (isPressed) {
    var x2 = e.offsetX,
        y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
colorEl.addEventListener('change', function (e) {
  return color = e.target.value;
});
document.addEventListener('click', function (e) {
  if (e.target.id === "increase") {
    size += 5;
    size > 50 && (size = 50);
    updateSizeOnScreen();
  } else if (e.target.id === "decrease") {
    size -= 5;
    size < 50 && (size = 5);
    updateSizeOnScreen();
  } else if (e.target.id === 'clear') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});