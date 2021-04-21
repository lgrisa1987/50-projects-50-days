"use strict";

var boxes = [].slice.call(document.querySelectorAll('.box'));
var line = document.querySelector('.line');

var checkBoxes = function checkBoxes() {
  var triggerBottom = window.innerHeight / 5 * 4;
  line.style.top = "".concat(triggerBottom, "px");
  boxes.forEach(function (box) {
    var boxTop = box.getBoundingClientRect().top;
    console.log(boxTop, box.offsetTop);
    if (boxTop < triggerBottom) box.classList.add('show');else box.classList.remove('show');
  });
};

checkBoxes();
window.addEventListener('scroll', checkBoxes);