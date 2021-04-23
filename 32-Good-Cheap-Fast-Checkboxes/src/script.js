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

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     toggles = selectAll(".toggle"),
     good = select("#good"),
     cheap = select("#cheap"),
     fast = select("#fast"),
     doTheTrick = (e) => {
         if (good.checked && cheap.checked && fast.checked) {
             good === e.target && (fast.checked = false);
             cheap === e.target && (good.checked = false);
             fast === e.target && (cheap.checked = false);
         }
     }

 toggles.forEach(toggle => toggle.addEventListener("change", doTheTrick));