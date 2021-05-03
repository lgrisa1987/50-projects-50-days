 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Open Sans"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     password = select("#password"),
     background = select("#background");
 let count = 0;
 password.addEventListener('input', e => {
     const input = e.target.value,
         length = input.length,
         blurValue = 20 - length * 2;
     background.style.filter = `blur(${blurValue}px)`;
 })