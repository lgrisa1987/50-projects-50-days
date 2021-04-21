 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Roboto"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const selectAll = (el) => [].slice.call(document.querySelectorAll(el));
 const buttons = selectAll('.ripple');

 buttons.forEach(button => {
     button.addEventListener('click', function (e) {
         const x = e.clientX;
         const y = e.clientY;
         const buttonTop = this.offsetTop;
         const buttonLeft = this.offsetLeft;
         const xInside = x - buttonLeft;
         const yInside = y - buttonTop;
         console.log(x, buttonLeft, xInside);
         const circle = document.createElement('span');
         circle.className = "circle";
         circle.setAttribute('style', `top:${yInside}px;left:${xInside}px`);
         this.appendChild(circle);
         /*  circle.addEventListener('animationend', function () {
              this.remove();
          }); */
     });
 })