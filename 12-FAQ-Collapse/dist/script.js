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
var toggles = [].slice.call(document.querySelectorAll('.faq-toggle'));

for (var toggle in toggles) {
  toggles[toggle].addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
  });
}