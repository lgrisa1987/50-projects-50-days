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
    button = select('#button'),
    toast = select('#toasts'),
    messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'],
    types = ['info', 'success', 'error', 'warning'],
    getRandomData = function getRandomData() {
  var random = function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  return {
    message: random(messages),
    type: random(types)
  };
},
    createNotification = function createNotification() {
  var notif = document.createElement('div');
  notif.className = "toast ".concat(getRandomData().type);
  notif.textContent = getRandomData().message;
  toast.appendChild(notif);
  setTimeout(function () {
    notif.style.animation = "slideOut .5s forwards ease-in-out";
    notif.addEventListener('animationend', function (e) {
      return e.animationName === "slideOut" && toast.removeChild(e.target);
    });
  }, 3000);
};

button.addEventListener('click', createNotification);