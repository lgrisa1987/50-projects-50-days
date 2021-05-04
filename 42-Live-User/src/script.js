 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Roboto"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });

 /* https://randomuser.me/ */

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     result = select("#result"),
     filter = select("#filter"),
     listItems = [],
     getData = /* async */ () => {
         /* const res = await fetch("https://randomuser.me/api?results=50"),
             {
                 results
             } = await res.json(); */
         const xhr = new XMLHttpRequest(),
             url = "https://randomuser.me/api?results=50",
             renderList = (results) => {
                 results.forEach(user => {
                     const li = document.createElement("li"),
                         {
                             picture,
                             name,
                             location
                         } = user;
                     listItems.push(li);
                     li.innerHTML = `<img src="${picture.large}" alt="${name.first}">
             <div class="user-info">
                <h4>${name.first} ${name.last}</h4>
                <p>${location.city}, ${location.country}</p>
            </div>`;
                     result.appendChild(li);
                 });
             };

         xhr.addEventListener("readystatechange", function () {
             if (this.readyState === 4) {
                 if (this.status === 200) {
                     const {
                         results
                     } = JSON.parse(this.responseText);
                     renderList(results);
                 } else console.log("%cThe request fails", "background: red;color: white;padding: .5rem");
             }
         });
         xhr.open("GET", url, true);
         xhr.setRequestHeader('Accept', 'application/json');
         xhr.send();
         result.innerHTML = "";
     },
     filterData = searchTerm => {
         listItems.forEach(item => {
             /*  if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) item.classList.remove("hide") */
             if (item.textContent.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) item.classList.remove("hide");
             else item.classList.add("hide");
         })
     }

 getData();

 filter.addEventListener('input', e => filterData(e.target.value));