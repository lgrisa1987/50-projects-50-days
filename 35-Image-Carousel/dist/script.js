"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Poppins"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});
var idx = 0;

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    imgs = select("#imgs"),
    btns = [].slice.call(selectAll(".btn")),
    img = selectAll("#imgs img"),
    changeImg = function changeImg() {
  idx > img.length - 1 && (idx = 0);
  idx < 0 && (idx = img.length - 1);
  imgs.style.transform = "translateX(-".concat(idx * 500, "px)");
},
    run = function run() {
  idx++;
  changeImg();
};

var interval = setInterval(run, 2000);
btns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    index === 0 ? idx-- : idx++;
    changeImg();
    clearInterval(interval); //interval = setInterval(run, 2000);
  });
});