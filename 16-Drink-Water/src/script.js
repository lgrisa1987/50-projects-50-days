 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Montserrat"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const smallCups = [].slice.call(document.getElementsByClassName('cup-small')),
     liters = document.getElementById('liters'),
     percentage = document.getElementById('percentage'),
     remained = document.getElementById('remained'),
     updateBigCup = () => {
         const fullCups = document.querySelectorAll('.cup-small.full').length,
             totalCups = smallCups.length;
         if (fullCups === 0) percentage.setAttribute('style', 'visibility:hidden; height: 0;');
         else {
             percentage.setAttribute('style', `visibility: visible; height: ${fullCups / totalCups * 330}px`);
         }
         if (fullCups === totalCups) remained.setAttribute('style', 'visibility:hidden; height: 0;');
         else {
             remained.removeAttribute('style'), liters.textContent = `${2-(250 * fullCups / 1000)}L`;
         };

         percentage.textContent = `${fullCups/totalCups*100}%`;
     },
     highlightCups = (index) => {
         (smallCups[index].classList.contains('full') && (!smallCups[index].nextElementSibling || !smallCups[index].nextElementSibling.classList.contains('full'))) && index--;
         smallCups.forEach((cup, index2) => {
             if (index2 <= index) cup.classList.add('full');
             else cup.classList.remove('full');
         });
         updateBigCup();
     }


 smallCups.forEach((cup, i) => {
     /Trident/.test(navigator.userAgent) && (cup.innerHTML = `<span>${cup.textContent}</span>`);
     cup.addEventListener('click', () => highlightCups(i));
 });