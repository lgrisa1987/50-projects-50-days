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
    nav = selectAll(".nav");

document.body.addEventListener("click", function (e) {
  var openBtn = e.target.parentElement.classList.contains("open-btn"),
      closeBtn = e.target.parentElement.classList.contains("close-btn");
  if (openBtn || closeBtn) nav.forEach(function (navEl) {
    return navEl.classList.toggle("visible");
  });
});