 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Roboto",
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     boxesContainer = select("#boxes"),
     btn = select("#btn"),
     createBoxes = () => {
         for (let i = 0; i < 4; i++) {
             for (let j = 0; j < 4; j++) {
                 const box = document.createElement("div");
                 box.className = "box";
                 box.style["background-position"] = `${-j*125}px ${-i*125}px`;
                 boxesContainer.appendChild(box);
             }
         }
     };

 createBoxes();

 btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));