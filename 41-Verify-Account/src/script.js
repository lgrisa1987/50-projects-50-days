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
     codes = selectAll(".code");

 codes[0].focus();

 codes.forEach((code, index, arr) => {
     code.addEventListener("keydown", (e) => {
         (e.key >= 0 && e.key <= 9) && (codes[index].value = "", setTimeout(() => arr[index + 1].focus(), 10));
         (e.key === "Backspace") && setTimeout(() => arr[index - 1].focus(), 10);
     });
 })