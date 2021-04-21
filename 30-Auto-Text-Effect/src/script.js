 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Oswald"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     textEl = select('#text'),
     speedEl = select('#speed'),
     text = "We Love Programming!";
 let idx = 1,
     speed = 300 / speedEl.value;
 const writeText = () => {
     textEl.textContent = text.slice(0, idx);
     idx++;
     idx > text.length && (idx = 1);
     setTimeout(writeText, speed);
 };


 writeText();

 speedEl.addEventListener('input', e => speed = 300 / e.target.value);