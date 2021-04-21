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
     form = select('#form'),
     search = select('#search'),
     main = select('#main'),
     APIURL = "https://api.github.com/users/",
     createUserCard = (user) => {
         const {
             avatar_url,
             name,
             bio,
             followers,
             following,
             public_repos
         } = user;
         const cardHTML = `<div class="card">
            <div><img src="${avatar_url}" alt="${name}" class="avatar"></div>
            <div class="user-info">
                <h2>${name}</h2>
                <p>${bio}</p>
                <ul>
                    <li>${followers} <strong>Followers</strong></li>
                    <li>${following} <strong>Following</strong></li>
                    <li>${public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                </div>
            </div>
        </div>`;
         main.innerHTML = cardHTML;
     },
     createErrorCard = (msg) => {
         const cardHTML = `<div class="card">
                        <h1>${msg}</h1>
                </div>`;
         main.innerHTML = cardHTML;
     },
     setAttributes = (el, attrs) => {
         for (var key in attrs) el.setAttribute(key, attrs[key]);
     },
     addReposToCard = repos => {
         const reposEl = select('#repos');
         repos.slice(0, 5).forEach(repo => {
             const repoEl = document.createElement('a'),
                 {
                     html_url,
                     name
                 } = repo;
             setAttributes(repoEl, {
                 class: "repo",
                 href: html_url,
                 target: "_blank"
             })
             repoEl.textContent = name;
             reposEl.appendChild(repoEl);
         });
     },
     getData = (username, fn, message, repos = "") => {
         axios(APIURL + username + repos)
             .then(res => fn(res.data))
             .catch(err => err.response.status === 404 && createErrorCard(message));
     };

 /* -------- async-await ----------*/
 /*  getUser = async username => {
     try{
        const {
            data
        } = await axios(APIURL + username);
            console.log(data);
     }catch(err){
        console.log(err);
     }
  } */

 form.addEventListener('submit', e => {
     e.preventDefault();
     const user = search.value;
     if (user) {
         getData(user, createUserCard, 'No profile with this username.');
         getData(user, addReposToCard, 'Problem fetching repos.', '/repos?sort=created');
         search.value = "";
     }
 });