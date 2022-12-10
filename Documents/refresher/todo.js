const myTodos = getSavedTodos();

const filter = {
    text: '',
    completed: false
}




 renderTodos(myTodos,filter)

//  with each element typed re assigns value of filter.text and calls renderTodos function
 document.querySelector('#search-text').addEventListener('input',(e) => {
    filter.text = e.target.value;
    renderTodos(myTodos,filter)
 });

 document.querySelector('#todo-form').addEventListener('submit',(e) => {
    e.preventDefault();
    myTodos.push({
        text:e.target.elements.todoInput.value,
        completed:false
    })
     saveTodos()
    renderTodos(myTodos,filter)
    e.target.elements.todoInput.value = ''
 })

document.querySelector('#hide-completed').addEventListener('change',(e) => {
    filter.completed = e.target.checked;
    renderTodos(myTodos,filter)
});

  /* =============== HELPER FUNCTIONS ================ */


//   we have to convert our array data into a string
