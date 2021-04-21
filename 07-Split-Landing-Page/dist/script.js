"use strict";

var split = [].slice.call(document.querySelectorAll('.split'));
var container = document.querySelector('.container');
split.forEach(function (el) {
  var elClass = "".concat(el.classList[1]);
  el.addEventListener('mouseenter', function () {
    return container.classList.add("hover-".concat(elClass));
  });
  el.addEventListener('mouseleave', function () {
    return container.classList.remove("hover-".concat(elClass));
  });
});