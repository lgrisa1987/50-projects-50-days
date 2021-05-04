 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Monserrat"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el));