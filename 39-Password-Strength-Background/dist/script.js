"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Open Sans"]
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
    password = select("#password"),
    background = select("#background");

var count = 0;
password.addEventListener('input', function (e) {
  var input = e.target.value,
      length = input.length,
      blurValue = 20 - length * 2;
  background.style.filter = "blur(".concat(blurValue, "px)");
});