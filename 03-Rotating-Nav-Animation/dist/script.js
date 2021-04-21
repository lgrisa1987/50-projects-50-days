"use strict";

/* const open = document.getElementById('open');
const close = document.getElementById('close'); */
var container = document.querySelector('.container');
var circleNavBtns = document.querySelectorAll('.circle button');

for (var i = 0; i < circleNavBtns.length; i++) {
  circleNavBtns[i].addEventListener('click', function () {
    return container.classList.toggle('show-nav');
  });
}