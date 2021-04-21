"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Muli"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});
var toggle = document.getElementById('toggle'),
    nav = document.getElementById('nav');
toggle.addEventListener('click', function () {
  return nav.classList.toggle('active');
});