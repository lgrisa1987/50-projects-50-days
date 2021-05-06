 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Press Start 2P"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     screens = selectAll(".screen"),
     chooseInsectBtns = selectAll(".choose-insect-btn"),
     startBtn = select("#start-btn"),
     timeEl = select("#time"),
     scoreEl = select("#score"),
     message = select("#message"),
     gameContainer = select("#game-container");
 let seconds = 0,
     score = 0,
     selectedInsects = {};

 const getRandomLocation = () => {
         const width = window.innerWidth,
             height = window.innerHeight,
             x = Math.random() * (width - 200) + 100,
             y = Math.random() * (height - 200) + 100;
         return {
             x,
             y
         };
     },
     createInsect = () => {
         const insect = document.createElement("div"),
             {
                 x,
                 y
             } = getRandomLocation(),
             {
                 src,
                 alt
             } = selectedInsects;
         insect.classList.add("insect");
         insect.setAttribute("style", `top: ${y}px;left:${x}px`);
         insect.innerHTML = `<img src="${src}" alt="${alt}" style="transform: rotate(${Math.round(Math.random()*360)}deg)"/>`;
         gameContainer.appendChild(insect);

         insect.addEventListener("click", catchInsect.bind(null, insect));
     },
     catchInsect = (el) => {
         console.log(el)
         increaseScore();
         el.classList.add("caught");
         el.addEventListener("transitionend", function () {
             this.parentElement.removeChild(this);
         });
         addInsects();
     },
     addInsects = () => {
         setTimeout(createInsect, 1000);
         setTimeout(createInsect, 1500);
     },
     increaseScore = () => {
         score++;
         score > 19 && message.classList.add("visible");
         scoreEl.innerHTML = `Score: ${score}`;
     },
     increaseTime = () => {
         let m = Math.floor(seconds / 60),
             s = seconds % 60;
         m = m < 10 ? `0${m}` : m;
         s = s < 10 ? `0${s}` : s;
         timeEl.innerHTML = `Time: ${m}:${s}`;
         seconds++;
     },
     startGame = () => {
         setInterval(increaseTime, 1000);
     };

 startBtn.addEventListener("click", () => {
     screens[0].classList.add("up");
 });

 chooseInsectBtns.forEach(btn => {
     btn.addEventListener("click", () => {
         const img = btn.querySelector("img"),
             src = img.src,
             alt = img.alt;
         selectedInsects = {
             src,
             alt
         };
         screens[1].classList.add("up");
         setTimeout(createInsect, 1000);
         startGame();
     })
 })