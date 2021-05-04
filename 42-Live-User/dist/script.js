"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Roboto"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});
/* https://randomuser.me/ */

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    result = select("#result"),
    filter = select("#filter"),
    listItems = [],
    getData =
/* async */
function getData() {
  /* const res = await fetch("https://randomuser.me/api?results=50"),
      {
          results
      } = await res.json(); */
  var xhr = new XMLHttpRequest(),
      url = "https://randomuser.me/api?results=50",
      renderList = function renderList(results) {
    results.forEach(function (user) {
      var li = document.createElement("li"),
          picture = user.picture,
          name = user.name,
          location = user.location;
      listItems.push(li);
      li.innerHTML = "<img src=\"".concat(picture.large, "\" alt=\"").concat(name.first, "\">\n             <div class=\"user-info\">\n                <h4>").concat(name.first, " ").concat(name.last, "</h4>\n                <p>").concat(location.city, ", ").concat(location.country, "</p>\n            </div>");
      result.appendChild(li);
    });
  };

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        var _JSON$parse = JSON.parse(this.responseText),
            results = _JSON$parse.results;

        renderList(results);
      } else console.log("%cThe request fails", "background: red;color: white;padding: .5rem");
    }
  });
  xhr.open("GET", url, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  result.innerHTML = "";
},
    filterData = function filterData(searchTerm) {
  listItems.forEach(function (item) {
    /*  if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) item.classList.remove("hide") */
    if (item.textContent.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) item.classList.remove("hide");else item.classList.add("hide");
  });
};

getData();
filter.addEventListener('input', function (e) {
  return filterData(e.target.value);
});