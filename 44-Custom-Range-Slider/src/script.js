 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Lato"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     range = select("#range"),
     // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
     scale = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;

 range.value = 50;

 range.addEventListener("input", e => {
     const value = +e.target.value,
         label = e.target.nextElementSibling,
         rangeWidth = parseInt(getComputedStyle(range).getPropertyValue("width")),
         labelWidth = parseInt(getComputedStyle(label).getPropertyValue("width")),
         max = e.target.max,
         min = e.target.min,
         left = value * (rangeWidth / max) - labelWidth / 2 + scale(value, min, max, 10, -10)
     label.style.left = `${left}px`;
     label.innerHTML = value;

 });