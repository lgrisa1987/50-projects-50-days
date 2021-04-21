"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Open Sans"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    nav = select('.nav'),
    fixNav = function fixNav(el) {
  if (el.pageYOffset > nav.offsetHeight + 150) nav.classList.add('active');else nav.classList.remove('active');
};

window.addEventListener('scroll', fixNav.bind(null, window));