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
     resultEl = select('#result'),
     lengthEl = select('#length'),
     upperCaseEl = select('#uppercase'),
     lowerCaseEl = select('#lowercase'),
     numbersEl = select('#numbers'),
     symbolsEl = select('#symbols'),
     generateEl = select('#generate'),
     clipboardEl = select('#clipboard'),

     getRandom = (num, num2) => String.fromCharCode(Math.floor(Math.random() * num) + num2), //26,10, 97,65, 48
     getRandomSymbol = () => {
         const symbols = '!@#$%^&*(){}[]=<>/,.';
         return symbols[Math.floor(Math.random() * symbols.length)]
     },
     randomFunc = {
         lower: getRandom,
         upper: getRandom,
         number: getRandom,
         symbol: getRandomSymbol
     },
     generatePassword = (lower, upper, number, symbol, length) => {
         let generatedPassword = "";
         const typesCount = lower + upper + number + symbol,
             typesArr = [{
                 lower
             }, {
                 upper
             }, {
                 number
             }, {
                 symbol
             }].filter(item => Object.values(item)[0]);

         if (typesCount === 0) return "";

         for (let i = 0; i < length; i += typesCount) {
             typesArr.forEach(type => {
                 const funcName = Object.keys(type)[0],
                     value = funcName === "lower" ? [26, 97] : funcName === "upper" ? [26, 65] : funcName === "number" ? [10, 48] : [];
                 generatedPassword += randomFunc[funcName](...value);
             })
         }
         const finalPassword = generatedPassword.slice(0, length);

         return finalPassword;
     };

 clipboardEl.addEventListener("click", () => {
     const textArea = document.createElement("textarea"),
         password = resultEl.textContent;
     if (!password) return;
     textArea.value = password;
     document.body.appendChild(textArea);
     textArea.select();
     document.execCommand("copy");
     document.body.removeChild(textArea);
     alert("Password copied to clipboard!!");
 })


 generateEl.addEventListener("click", () => {
     const length = +lengthEl.value;
     const hasLower = lowerCaseEl.checked,
         hasUpper = upperCaseEl.checked,
         hasNumber = numbersEl.checked,
         hasSymbol = symbolsEl.checked;

     resultEl.textContent = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
 })