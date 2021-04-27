"use strict";

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    container = select("#container"),
    rgbToHex = function rgbToHex() {
  var r = function r() {
    return Math.round(Math.random() * 255);
  },
      g = r.bind(),
      b = r.bind();

  return "#" + [r(), g(), b()].map(function (num) {
    var hex = Number(num).toString(16);
    if (hex.length < 2) hex = "0" + hex;
    return hex;
  }).join("");
},
    squares = 500,
    setColor = function setColor(element) {
  var randomColor = rgbToHex();
  element.setAttribute("style", "background-color:".concat(randomColor, ";box-shadow: 0 0 .2rem ").concat(randomColor, " ,0 0 1rem ").concat(randomColor));
},
    removeColor = function removeColor(element) {
  return element.removeAttribute("style");
},
    createSquares = function createSquares() {
  var _loop = function _loop(i) {
    var square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function () {
      return setColor(square);
    });
    square.addEventListener("mouseout", function () {
      return removeColor(square);
    });
    container.appendChild(square);
  };

  for (var i = 0; i < squares; i++) {
    _loop(i);
  }
};

createSquares();