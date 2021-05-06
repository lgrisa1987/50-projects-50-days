"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Press Start 2P"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    screens = selectAll(".screen"),
    chooseInsectBtns = selectAll(".choose-insect-btn"),
    startBtn = select("#start-btn"),
    timeEl = select("#time"),
    scoreEl = select("#score"),
    message = select("#message"),
    gameContainer = select("#game-container");

var seconds = 0,
    score = 0,
    selectedInsects = {};

var getRandomLocation = function getRandomLocation() {
  var width = window.innerWidth,
      height = window.innerHeight,
      x = Math.random() * (width - 200) + 100,
      y = Math.random() * (height - 200) + 100;
  return {
    x: x,
    y: y
  };
},
    createInsect = function createInsect() {
  var insect = document.createElement("div"),
      _getRandomLocation = getRandomLocation(),
      x = _getRandomLocation.x,
      y = _getRandomLocation.y,
      _selectedInsects = selectedInsects,
      src = _selectedInsects.src,
      alt = _selectedInsects.alt;

  insect.classList.add("insect");
  insect.setAttribute("style", "top: ".concat(y, "px;left:").concat(x, "px"));
  insect.innerHTML = "<img src=\"".concat(src, "\" alt=\"").concat(alt, "\" style=\"transform: rotate(").concat(Math.round(Math.random() * 360), "deg)\"/>");
  gameContainer.appendChild(insect);
  insect.addEventListener("click", catchInsect.bind(null, insect));
},
    catchInsect = function catchInsect(el) {
  console.log(el);
  increaseScore();
  el.classList.add("caught");
  el.addEventListener("transitionend", function () {
    this.parentElement.removeChild(this);
  });
  addInsects();
},
    addInsects = function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
},
    increaseScore = function increaseScore() {
  score++;
  score > 19 && message.classList.add("visible");
  scoreEl.innerHTML = "Score: ".concat(score);
},
    increaseTime = function increaseTime() {
  var m = Math.floor(seconds / 60),
      s = seconds % 60;
  m = m < 10 ? "0".concat(m) : m;
  s = s < 10 ? "0".concat(s) : s;
  timeEl.innerHTML = "Time: ".concat(m, ":").concat(s);
  seconds++;
},
    startGame = function startGame() {
  setInterval(increaseTime, 1000);
};

startBtn.addEventListener("click", function () {
  screens[0].classList.add("up");
});
chooseInsectBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var img = btn.querySelector("img"),
        src = img.src,
        alt = img.alt;
    selectedInsects = {
      src: src,
      alt: alt
    };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});