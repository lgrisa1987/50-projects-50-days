"use strict";

var loadText = document.querySelector('.loading-text');
var bg = document.querySelector('.bg'); // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

var scale = function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var load = 0;

var blurring = function blurring() {
  load++;
  load > 99 && clearInterval(_int);
  loadText.textContent = "".concat(load, "%");
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  /Trident/.test(navigator.userAgent) ? bg.style.opacity = scale(load, 0, 100, 0, 1) : bg.style.filter = "blur(".concat(scale(load, 0, 100, 30, 0), "px)");
};

var _int = setInterval(blurring, 30);