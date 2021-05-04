 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Muli"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     nav = selectAll(".nav");

 document.body.addEventListener("click", (e) => {
     const openBtn = e.target.parentElement.classList.contains("open-btn"),
         closeBtn = e.target.parentElement.classList.contains("close-btn");
     if (openBtn || closeBtn) nav.forEach(navEl => navEl.classList.toggle("visible"));
 })