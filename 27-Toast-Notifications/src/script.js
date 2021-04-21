 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Open Sans"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     button = select('#button'),
     toast = select('#toasts'),
     messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'],
     types = ['info', 'success', 'error', 'warning'],
     getRandomData = () => {
         const random = (arr) => arr[Math.floor(Math.random() * arr.length)]
         return {
             message: random(messages),
             type: random(types),
         }
     },
     createNotification = () => {
         const notif = document.createElement('div');
         notif.className = `toast ${getRandomData().type}`;
         notif.textContent = getRandomData().message;
         toast.appendChild(notif);
         setTimeout(() => {
             notif.style.animation = "slideOut .5s forwards ease-in-out";
             notif.addEventListener('animationend', (e) => e.animationName === "slideOut" && toast.removeChild(e.target));
         }, 3000);
     };

 button.addEventListener('click', createNotification);