 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Muli"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
         runCode();
     }
 });

 const runCode = () => {
     const counters = [].slice.call(document.querySelectorAll('.counter'));

     counters.forEach(counter => {
         counter.textContent = "0";

         const updateCounter = () => {
             const target = +counter.getAttribute('data-target'),
                 c = +counter.textContent,
                 increment = target / 400;
             if (c < target) {
                 counter.textContent = `${Math.ceil(c + increment)}`;
                 setTimeout(updateCounter, 1);
             } else counter.textContent = target;
         }

         updateCounter();
     });
 }