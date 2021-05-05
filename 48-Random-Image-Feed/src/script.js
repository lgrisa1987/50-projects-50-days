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


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     container = select(".container"),
     unsplashURL = "https://source.unsplash.com/random/",
     rows = 10,
     getRandomNumber = () => Math.floor(Math.random() * 10) + 300,
     getRandomSize = () => `${getRandomNumber()}x${getRandomNumber()}`;

 for (let i = 0; i < rows * 3; i++) {
     const img = new Image();
     img.src = `${unsplashURL}${getRandomSize()}`
     container.appendChild(img);
 }