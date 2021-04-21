"use strict";

var search = document.querySelector('.search');
var btn = document.querySelector('.btn');
var input = document.querySelector('.input');
btn.addEventListener('click', function () {
  return search.classList.toggle('active'), input.focus();
});