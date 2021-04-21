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
var insert = document.getElementById('insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = " \n     <div class=\"key\">\n            ".concat(e.key === " " ? "Space".toUpperCase() : e.key.toUpperCase(), "\n            <small>event.key</small>\n        </div>\n        <div class=\"key\">\n            ").concat(e.keyCode, "\n            <small>event.keyCode</small>\n        </div>\n        ").concat(/Trident/.test(navigator.userAgent) ? "" : "<div class=\"key\">" + e.code + "<small>event.code</small></div>", "\n        ");
});