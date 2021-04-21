"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Oswald"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    loveMe = select('.loveMe'),
    times = select('#times'),
    createHeart = function createHeart(e) {
  var heart = document.createElement('i'),
      x = e.clientX,
      y = e.clientY,
      leftOffset = e.target.offsetLeft,
      topOffset = e.target.offsetTop,
      xInside = x - leftOffset,
      yInside = y - topOffset;
  heart.className = 'fa fa-heart';
  heart.setAttribute('style', "top:".concat(yInside, "px;left:").concat(xInside, "px;"));
  loveMe.appendChild(heart);
  times.textContent = ++timesClicked;
  heart.addEventListener('animationend', function () {
    return loveMe.removeChild(heart);
  });
};

var clickTime = 0,
    timesClicked = 0;
loveMe.addEventListener('click', function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else clickTime = new Date().getTime();
  }
});