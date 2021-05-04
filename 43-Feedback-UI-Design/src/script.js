 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Montserrat"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });

 /* https://randomuser.me/ */

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     ratings = selectAll(".rating"),
     ratingsContainer = select(".ratings-container"),
     sendBtn = select("#send"),
     panel = select("#panel"),
     removeActiveClasses = () => {
         for (let i = 0; i < ratings.length; i++) {
             ratings[i].classList.remove("active");
         }
     };
 let selectedRating = "Satisfied";

 ratingsContainer.addEventListener("click", e => {
     if (e.target.tagName === "IMG") {
         removeActiveClasses();
         e.target.parentElement.classList.add("active");
         selectedRating = e.target.nextElementSibling.textContent || e.target.textContent;
     }
 });

 sendBtn.addEventListener("click", e => {
     panel.innerHTML = `
     <i class="fas fa-heart"></i>
     <strong>Thank You!!</strong>
     <br>
     <strong>Feedback: ${selectedRating}</strong>
     <p>We'll use your feedback to improve our costumer support</p>
     `
 });