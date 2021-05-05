 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Poppins"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     form = select('#form'),
     input = select('#input'),
     todosUl = select('#todos'),
     todos = JSON.parse(localStorage.getItem('todos')),
     updateLS = () => {
         const todosEl = selectAll("li"),
             todos = [];
         todosEl.forEach(todo => todos.push({
             text: todo.textContent,
             completed: todo.classList.contains("completed")
         }));
         localStorage.setItem("todos", JSON.stringify(todos));
     },
     addTodo = (todo) => {
         const todoText = input.value;
         if (todoText || todo) {
             const todoEl = document.createElement("li");
             todoEl.textContent = todoText || todo.text;
             if (todo && todo.completed) todoEl.classList.add("completed");
             todosUl.appendChild(todoEl);
             input.value = "";
             todoEl.addEventListener("click", () => {
                 todoEl.classList.toggle("completed");
                 updateLS();
             });
             todoEl.addEventListener("contextmenu", e => {
                 e.preventDefault();
                 todosUl.removeChild(todoEl);
                 updateLS();
             });
             updateLS();
         }
     }

 todos && todos.forEach(todo => {
     addTodo(todo), console.log(todo)
 });

 form.addEventListener("submit", e => {
     e.preventDefault();
     addTodo();
 })