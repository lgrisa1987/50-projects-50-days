"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Poppins"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var select = function select(e) {
  return document.querySelector(e);
};

var hourEl = select(".clock__needle--hour");
var minuteEl = select(".clock__needle--minute");
var secondEl = select(".clock__needle--second");
var timeEl = select(".time");
var dateEl = select(".date");
var toggle = select(".toggle");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var scale = function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

var setTime = function setTime() {
  var time = new Date();
  var month = time.getMonth();
  var day = time.getDay();
  var date = time.getDate();
  var hours = time.getHours();
  var hoursForClock = hours % 12;
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var ampm = hours > 12 ? "PM" : "AM";
  hourEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(hoursForClock, 0, 11, 0, 360), "deg)");
  minuteEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(minutes, 0, 59, 0, 360), "deg)");
  secondEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(seconds, 0, 59, 0, 360), "deg)");
  timeEl.innerHTML = "".concat(hoursForClock, ":").concat(minutes < 10 ? "0".concat(minutes) : minutes, " ").concat(ampm);
  dateEl.innerHTML = "".concat(days[day], ", ").concat(months[month], " <span class=\"date__circle\">").concat(date, "</span>");
};

setInterval(setTime, 1000);
toggle.addEventListener('click', function (e) {
  var html = select('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add('dark');
    e.target.innerHTML = "Light Mode";
  }
});