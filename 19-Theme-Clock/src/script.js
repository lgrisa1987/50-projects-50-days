 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });

 const select = (e) => document.querySelector(e);
 const hourEl = select(".clock__needle--hour");
 const minuteEl = select(".clock__needle--minute");
 const secondEl = select(".clock__needle--second");
 const timeEl = select(".time");
 const dateEl = select(".date");
 const toggle = select(".toggle");

 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 const scale = (num, in_min, in_max, out_min, out_max) => {
     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
 }

 const setTime = () => {
     const time = new Date();
     const month = time.getMonth();
     const day = time.getDay();
     const date = time.getDate();
     const hours = time.getHours();
     const hoursForClock = hours % 12;
     const minutes = time.getMinutes();
     const seconds = time.getSeconds();
     const ampm = hours > 12 ? "PM" : "AM"

     hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
     minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
     secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;
     timeEl.innerHTML = `${hoursForClock}:${minutes <10 ? `0${minutes}`: minutes} ${ampm}`;
     dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="date__circle">${date}</span>`;
 }

 setInterval(setTime, 1000);

 toggle.addEventListener('click', (e) => {
     const html = select('html');
     if (html.classList.contains('dark')) {
         html.classList.remove('dark');
         e.target.innerHTML = "Dark Mode";
     } else {
         html.classList.add('dark');
         e.target.innerHTML = "Light Mode";
     }
 });