"use strict";

var panels = [].slice.call(document.querySelectorAll('.panel'));
panels.forEach(function (panel) {
  panel.addEventListener('click', function () {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(function (panel) {
    return panel.classList.remove('active');
  });
}