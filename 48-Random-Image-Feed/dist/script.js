"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Montserrat"]
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
    container = select(".container"),
    unsplashURL = "https://source.unsplash.com/random/",
    rows = 10,
    getRandomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
},
    getRandomSize = function getRandomSize() {
  return "".concat(getRandomNumber(), "x").concat(getRandomNumber());
};

for (var i = 0; i < rows * 3; i++) {
  var img = new Image();
  img.src = "".concat(unsplashURL).concat(getRandomSize());
  container.appendChild(img);
}