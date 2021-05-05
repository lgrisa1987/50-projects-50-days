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
    form = select('#form'),
    input = select('#input'),
    todosUl = select('#todos'),
    todos = JSON.parse(localStorage.getItem('todos')),
    updateLS = function updateLS() {
  var todosEl = selectAll("li"),
      todos = [];
  todosEl.forEach(function (todo) {
    return todos.push({
      text: todo.textContent,
      completed: todo.classList.contains("completed")
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
},
    addTodo = function addTodo(todo) {
  var todoText = input.value;

  if (todoText || todo) {
    var todoEl = document.createElement("li");
    todoEl.textContent = todoText || todo.text;
    if (todo && todo.completed) todoEl.classList.add("completed");
    todosUl.appendChild(todoEl);
    input.value = "";
    todoEl.addEventListener("click", function () {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      todosUl.removeChild(todoEl);
      updateLS();
    });
    updateLS();
  }
};

todos && todos.forEach(function (todo) {
  addTodo(todo), console.log(todo);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});