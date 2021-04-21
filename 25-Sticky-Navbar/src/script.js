 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Open Sans"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     nav = select('.nav'),
     fixNav = (el) => {
         if (el.pageYOffset > (nav.offsetHeight + 150)) nav.classList.add('active');
         else nav.classList.remove('active');
     };

 window.addEventListener('scroll', fixNav.bind(null, window));