 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const body = document.body,
     slides = [].slice.call(document.querySelectorAll('.slide')),
     arrows = [].slice.call(document.querySelectorAll('.arrow'));
 let activeSlide = 0;

 const setBgToBody = () => {
         body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
     },
     setActiveSlide = () => {
         slides.forEach(slide => slide.classList.remove('active'));
         slides[activeSlide].classList.add('active');
     }

 arrows.forEach(arrow => {
     arrow.addEventListener('click', function () {
         if (this.id === "left") activeSlide--, activeSlide < 0 && (activeSlide = slides.length - 1);
         else activeSlide++, activeSlide > (slides.length - 1) && (activeSlide = 0);
         setBgToBody();
         setActiveSlide();
     });
 });

 setBgToBody();