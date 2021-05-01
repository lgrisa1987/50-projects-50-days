 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Open Sans"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     contents = selectAll(".content"),
     listItems = selectAll("nav ul li");

 listItems.forEach((item, index, arr) => item.addEventListener("click", (e) => {
     Array.prototype.removeClass = function (clase) {
         this.forEach(element => element.classList.remove(clase));
     };
     const addClass = (elem, clase) => elem.classList.add(clase);

     contents.removeClass("show");
     arr.removeClass("active");
     addClass(contents[index], "show");
     addClass(e.currentTarget, "active");
 }));