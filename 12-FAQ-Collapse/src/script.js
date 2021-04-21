 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Muli"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const toggles = [].slice.call(document.querySelectorAll('.faq-toggle'));
 for (let toggle in toggles) {
     toggles[toggle].addEventListener('click', function () {
         this.parentElement.classList.toggle('active');
     });
 }