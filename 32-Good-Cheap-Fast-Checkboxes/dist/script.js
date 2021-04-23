"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Muli"]
  },
  active: function active() {
    document.body.classList.remove('hide');
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    resultEl = select('#result'),
    lengthEl = select('#length'),
    upperCaseEl = select('#uppercase'),
    lowerCaseEl = select('#lowercase'),
    numbersEl = select('#numbers'),
    symbolsEl = select('#symbols'),
    generateEl = select('#generate'),
    clipboardEl = select('#clipboard'),
    getRandom = function getRandom(num, num2) {
  return String.fromCharCode(Math.floor(Math.random() * num) + num2);
},
    //26,10, 97,65, 48
getRandomSymbol = function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
},
    randomFunc = {
  lower: getRandom,
  upper: getRandom,
  number: getRandom,
  symbol: getRandomSymbol
},
    generatePassword = function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol,
      typesArr = [{
    lower: lower
  }, {
    upper: upper
  }, {
    number: number
  }, {
    symbol: symbol
  }].filter(function (item) {
    return Object.values(item)[0];
  });
  if (typesCount === 0) return "";

  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(function (type) {
      var funcName = Object.keys(type)[0],
          value = funcName === "lower" ? [26, 97] : funcName === "upper" ? [26, 65] : funcName === "number" ? [10, 48] : [];
      generatedPassword += randomFunc[funcName].apply(randomFunc, value);
    });
  }

  var finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

clipboardEl.addEventListener("click", function () {
  var textArea = document.createElement("textarea"),
      password = resultEl.textContent;
  if (!password) return;
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Password copied to clipboard!!");
});
generateEl.addEventListener("click", function () {
  var length = +lengthEl.value;
  var hasLower = lowerCaseEl.checked,
      hasUpper = upperCaseEl.checked,
      hasNumber = numbersEl.checked,
      hasSymbol = symbolsEl.checked;
  resultEl.textContent = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});