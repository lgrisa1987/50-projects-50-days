"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Poppins"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});

var select = function select(el) {
  return document.querySelector(el);
},
    selectAll = function selectAll(el) {
  return [].slice.call(document.querySelectorAll(el));
},
    addBtn = select(".add"),
    notes = JSON.parse(localStorage.getItem("notes")),
    updateLS = function updateLS() {
  var notesText = selectAll("textarea"),
      notes = notesText.map(function (note) {
    return note.value;
  });
  localStorage.setItem("notes", JSON.stringify(notes));
},
    addNewNote = function addNewNote(text) {
  var note = document.createElement('div');
  note.classList.add("note");
  note.innerHTML = "\n            <div class=\"tools\">\n                <button class=\"edit\">\n                    <i class=\"fas fa-edit\"></i>\n                </button>\n                <button class=\"delete\">\n                    <i class=\"fas fa-trash-alt\"></i>\n                </button>\n            </div>\n            <div class=\"main ".concat(text ? "" : "hidden", "\"></div>\n            <textarea class=\"").concat(text ? "hidden" : "", "\"></textarea>");
  document.body.appendChild(note);
  var editBtn = note.querySelector(".edit"),
      deleteBtn = note.querySelector(".delete"),
      main = note.querySelector(".main"),
      textArea = note.querySelector("textarea");
  textArea.value = text;
  main.innerHTML = marked(text);
  deleteBtn.addEventListener("click", function () {
    document.body.removeChild(note);
    updateLS();
  });
  editBtn.addEventListener("click", function () {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });
  textArea.addEventListener("input", function (e) {
    var value = e.target.value;
    main.innerHTML = marked(value);
    updateLS();
  });
};

(function () {
  notes && notes.forEach(function (note) {
    return addNewNote(note);
  });
})();

addBtn.addEventListener("click", addNewNote.bind(null, ""));
/*  */