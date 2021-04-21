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
     loveMe = select('.loveMe'),
     times = select('#times'),
     createHeart = (e) => {
         const heart = document.createElement('i'),
             x = e.clientX,
             y = e.clientY,
             leftOffset = e.target.offsetLeft,
             topOffset = e.target.offsetTop,
             xInside = x - leftOffset,
             yInside = y - topOffset;
         heart.className = 'fa fa-heart';
         heart.setAttribute('style', `top:${yInside}px;left:${xInside}px;`)
         loveMe.appendChild(heart);
         times.textContent = ++timesClicked;
         heart.addEventListener('animationend', () => loveMe.removeChild(heart));
     }

 let clickTime = 0,
     timesClicked = 0;

 loveMe.addEventListener('click', e => {
     if (clickTime === 0) {
         clickTime = new Date().getTime()
     } else {
         if (new Date().getTime() - clickTime < 800) {
             createHeart(e);
             clickTime = 0;
         } else clickTime = new Date().getTime();
     }
 })