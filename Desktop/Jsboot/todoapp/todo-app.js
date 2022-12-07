const myTodos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}
// render todos on start up
renderTodos(myTodos,filters)



// each time you type this calls rendertodos
 document.querySelector('#todo-filter').addEventListener('input',(e) => {
    filters.searchText = e.target.value;
    renderTodos(myTodos,filters)
 });

//  adds a new todo to the mytodos array
 document.querySelector('#todo-form').addEventListener('submit',(e) => {
    e.preventDefault();
    myTodos.push({
        text:e.target.elements.todoInput.value,
        completed:false
    });
    saveTodos(myTodos)
    
    renderTodos(myTodos,filters);
    e.target.elements.todoInput.value = '';
 })

document.querySelector('#hide-completed').addEventListener('change',(e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(myTodos,filters)
});

