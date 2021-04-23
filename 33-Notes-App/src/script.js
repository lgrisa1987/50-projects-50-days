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

 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     addBtn = select(".add"),
     addNewNote = (text) => {
         const note = document.createElement('div');
         note.classList.add("note");
         note.innerHTML = `
            <div class="tools">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>`;

         document.body.appendChild(note);

         const editBtn = note.querySelector(".edit"),
             deleteBtn = note.querySelector(".delete"),
             main = note.querySelector(".main"),
             textArea = note.querySelector("textarea");


         deleteBtn.addEventListener("click", () => {
             document.body.removeChild(note);
         })
         editBtn.addEventListener("click", () => {
             main.classList.toggle("hidden");
             textArea.classList.toggle("hidden");
         })
     }

 addBtn.addEventListener("click", addNewNote.bind(null, false));


 /*  */