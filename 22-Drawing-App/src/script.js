 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Roboto"
         ]
     },
     active: function () {
         document.body.classList.remove('hide');
     }
 });
 let size = 10,
     color = "black",
     isPressed,
     x, y;
 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     canvas = select('#canvas'),
     sizeEl = select('#size'),
     colorEl = select('#color'),
     ctx = canvas.getContext('2d'),
     drawCircle = (x, y) => {
         ctx.beginPath();
         ctx.arc(x, y, size, 0, Math.PI * 2, true);
         ctx.fillStyle = color;
         ctx.fill();
     },
     drawLine = (x1, y1, x2, y2) => {
         ctx.beginPath();
         ctx.moveTo(x1, y1);
         ctx.lineTo(x2, y2);
         ctx.strokeStyle = color;
         ctx.lineWidth = size * 2;
         ctx.stroke();
     },
     getIfPressed = (ifpressed, value1, value2) => {
         isPressed = ifpressed;
         x = value1;
         y = value2;
     },
     updateSizeOnScreen = () => sizeEl.textContent = size;




 canvas.addEventListener('mousedown', e => {
     getIfPressed(true, e.offsetX, e.offsetY);
 });
 canvas.addEventListener('mouseup', e => {
     getIfPressed(false, undefined, undefined);
 });
 canvas.addEventListener('mousemove', e => {
     if (isPressed) {
         const x2 = e.offsetX,
             y2 = e.offsetY;
         drawCircle(x2, y2);
         drawLine(x, y, x2, y2);
         x = x2;
         y = y2;
     }
 });

 colorEl.addEventListener('change', e => color = e.target.value);

 document.addEventListener('click', e => {
     if (e.target.id === "increase") {
         size += 5;
         size > 50 && (size = 50);
         updateSizeOnScreen();
     } else if (e.target.id === "decrease") {
         size -= 5;
         size < 50 && (size = 5);
         updateSizeOnScreen();
     } else if (e.target.id === 'clear') {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
     }
 })