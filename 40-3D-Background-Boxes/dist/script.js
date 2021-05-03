"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Roboto", "Poppins"]
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
    boxesContainer = select("#boxes"),
    btn = select("#btn"),
    createBoxes = function createBoxes() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var box = document.createElement("div");
      box.className = "box";
      box.style["background-position"] = "".concat(-j * 125, "px ").concat(-i * 125, "px");
      boxesContainer.appendChild(box);
    }
  }
};

createBoxes();
btn.addEventListener("click", function () {
  return boxesContainer.classList.toggle("big");
});