 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });
 let idx = 0;
 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     imgs = select("#imgs"),
     btns = [].slice.call(selectAll(".btn")),
     img = selectAll("#imgs img"),
     changeImg = () => {
         idx > (img.length - 1) && (idx = 0);
         idx < 0 && (idx = img.length - 1);

         imgs.style.transform = `translateX(-${idx * 500}px)`;
     },
     run = () => {
         idx++;
         changeImg();
     };
 let interval = setInterval(run, 2000);

 btns.forEach((btn, index) => {
     btn.addEventListener('click', () => {
         index === 0 ? idx-- : idx++;
         changeImg();
         clearInterval(interval);
         //interval = setInterval(run, 2000);
     })
 })