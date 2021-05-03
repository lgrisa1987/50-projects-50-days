"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Muli"]
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
    codes = selectAll(".code");

codes[0].focus();
codes.forEach(function (code, index, arr) {
  code.addEventListener("keydown", function (e) {
    e.key >= 0 && e.key <= 9 && (codes[index].value = "", setTimeout(function () {
      return arr[index + 1].focus();
    }, 10));
    e.key === "Backspace" && setTimeout(function () {
      return arr[index - 1].focus();
    }, 10);
  });
});