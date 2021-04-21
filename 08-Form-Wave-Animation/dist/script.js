"use strict";

var labels = [].slice.call(document.querySelectorAll('label'));
labels.forEach(function (label) {
  label.innerHTML = label.textContent.split('').map(function (letter, index) {
    return "<span style=\"transition-delay:".concat(index * 50, "ms\">").concat(letter, "</span>");
  }).join('');
});