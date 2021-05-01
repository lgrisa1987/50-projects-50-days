"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Open Sans"]
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
    contents = selectAll(".content"),
    listItems = selectAll("nav ul li");

listItems.forEach(function (item, index, arr) {
  return item.addEventListener("click", function (e) {
    Array.prototype.removeClass = function (clase) {
      this.forEach(function (element) {
        return element.classList.remove(clase);
      });
    };

    var addClass = function addClass(elem, clase) {
      return elem.classList.add(clase);
    };

    contents.removeClass("show");
    arr.removeClass("active");
    addClass(contents[index], "show");
    addClass(e.currentTarget, "active");
  });
});