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

 const toggle = document.getElementById('toggle'),
     nav = document.getElementById('nav');

 toggle.addEventListener('click', () => nav.classList.toggle('active'));