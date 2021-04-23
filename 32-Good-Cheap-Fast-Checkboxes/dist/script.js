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

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    toggles = selectAll(".toggle"),
    good = select("#good"),
    cheap = select("#cheap"),
    fast = select("#fast"),
    doTheTrick = function doTheTrick(e) {
  if (good.checked && cheap.checked && fast.checked) {
    good === e.target && (fast.checked = false);
    cheap === e.target && (good.checked = false);
    fast === e.target && (cheap.checked = false);
  }
};

toggles.forEach(function (toggle) {
  return toggle.addEventListener("change", doTheTrick);
});