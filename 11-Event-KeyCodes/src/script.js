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

 const insert = document.getElementById('insert');

 window.addEventListener('keydown', e => {
     insert.innerHTML = ` 
     <div class="key">
            ${e.key === " " ? "Space".toUpperCase() : e.key.toUpperCase()}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        ${/Trident/.test(navigator.userAgent) ? "" : "<div class=\"key\">"+e.code+"<small>event.code</small></div>"}
        `
 })