const myTodos = [{
    text: 'Lift weights',
    completed:true
},{
    text: 'Cook breakfast',
    completed:false
},{
    text: 'Wash clothes',
    completed:true
},{
    text: 'Do Laundry',
    completed:false

},{
    text: 'Pick up meds',
    completed:false
}];

const filter = {
    text: ''
}


//  renders filtered todos and shows how many are left to complete
const renderTodos = (todos,filters) => {
    // filters todos that match filter object
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.text.toLowerCase());
    }) ;
    // clears todos 
    document.querySelector('#filtered-todo').textContent = ''
        // renders freshly filtered todos to page
     filteredTodos.forEach((todo) => {
        const filteredTodo = document.createElement('p');
        filteredTodo.textContent = todo.text;
        document.querySelector('#filtered-todo').appendChild(filteredTodo);
 });
//  creates an array of objects containing incomplete todos
 const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
});
// lets you know how many todos you have left to complete
const summary = document.createElement('h4');
summary.textContent = `You have ${incompleteTodos.length} todos left!`;
document.querySelector('#filtered-todo').appendChild(summary);


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
    renderTodos(myTodos,filter)
    e.target.elements.todoInput.value = ''
 })
  /* =============== HELPER FUNCTIONS ================ */