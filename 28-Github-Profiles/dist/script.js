"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Open Sans"]
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
    form = select('#form'),
    search = select('#search'),
    main = select('#main'),
    APIURL = "https://api.github.com/users/",
    createUserCard = function createUserCard(user) {
  var avatar_url = user.avatar_url,
      name = user.name,
      bio = user.bio,
      followers = user.followers,
      following = user.following,
      public_repos = user.public_repos;
  var cardHTML = "<div class=\"card\">\n            <div><img src=\"".concat(avatar_url, "\" alt=\"").concat(name, "\" class=\"avatar\"></div>\n            <div class=\"user-info\">\n                <h2>").concat(name, "</h2>\n                <p>").concat(bio, "</p>\n                <ul>\n                    <li>").concat(followers, " <strong>Followers</strong></li>\n                    <li>").concat(following, " <strong>Following</strong></li>\n                    <li>").concat(public_repos, " <strong>Repos</strong></li>\n                </ul>\n                <div id=\"repos\">\n                </div>\n            </div>\n        </div>");
  main.innerHTML = cardHTML;
},
    createErrorCard = function createErrorCard(msg) {
  var cardHTML = "<div class=\"card\">\n                        <h1>".concat(msg, "</h1>\n                </div>");
  main.innerHTML = cardHTML;
},
    setAttributes = function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
},
    addReposToCard = function addReposToCard(repos) {
  var reposEl = select('#repos');
  repos.slice(0, 5).forEach(function (repo) {
    var repoEl = document.createElement('a'),
        html_url = repo.html_url,
        name = repo.name;
    setAttributes(repoEl, {
      "class": "repo",
      href: html_url,
      target: "_blank"
    });
    repoEl.textContent = name;
    reposEl.appendChild(repoEl);
  });
},
    getData = function getData(username, fn, message) {
  var repos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  axios(APIURL + username + repos).then(function (res) {
    return fn(res.data);
  })["catch"](function (err) {
    return err.response.status === 404 && createErrorCard(message);
  });
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


form.addEventListener('submit', function (e) {
  e.preventDefault();
  var user = search.value;

  if (user) {
    getData(user, createUserCard, 'No profile with this username.');
    getData(user, addReposToCard, 'Problem fetching repos.', '/repos?sort=created');
    search.value = "";
  }
});