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
     filter = select("filter"),
     listItems = [],
     getData = async () => {
         const res = await fetch("https://randomuser.me/api?results=50"),
             {
                 results
             } = await res.json();
         result.innerHTML = "";

         results.forEach(user => {
             const li = document.createElement("li"),
                 {
                     picture,
                     name
                 } = user;
             listItems.push(li);
             li.innerHTML = `<img src="${picture.large}" alt="${name.first}">`;
             result.appendChild(li);
         });
     }

 getData();