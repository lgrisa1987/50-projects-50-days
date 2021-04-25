 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });
 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     nums = [].slice.call(selectAll('.nums span')),
     counter = select('.counter'),
     finalMessage = select('.final'),
     replay = select('#replay'),
     runAnimation = () => {
         nums.forEach((num, index, arr) => {
             const nextToLast = arr.length - 1;
             num.addEventListener("animationend", e => {
                 if (e.animationName === "goIn" && index !== nextToLast)(num.classList.remove("in"), num.classList.add("out"));
                 if (e.animationName === "goOut" && num.nextElementSibling) num.nextElementSibling.classList.add("in");
                 if (index === nextToLast)(counter.classList.add("hide"), finalMessage.classList.add("show"));
             })
         });
     },
     resetDOM = () => {
         [].slice.call([counter, finalMessage]).forEach((el, index) => el.classList.remove(index === 0 ? "hide" : "show"));
         nums.forEach(num => num.removeAttribute("class"));
         nums[0].classList.add('in');
     }

 runAnimation();

 replay.addEventListener('click', () => resetDOM(), runAnimation());