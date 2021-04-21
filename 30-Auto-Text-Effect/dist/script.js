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
    textEl = select('#text'),
    speedEl = select('#speed'),
    text = "We Love Programming!";

var idx = 1,
    speed = 300 / speedEl.value;

var writeText = function writeText() {
  textEl.textContent = text.slice(0, idx);
  idx++;
  idx > text.length && (idx = 1);
  setTimeout(writeText, speed);
};

writeText();
speedEl.addEventListener('input', function (e) {
  return speed = 300 / e.target.value;
});