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

//  renders todos in myTodo object on start up
 myTodos.forEach((todo) => {
    const showTodo = document.createElement('p');
    showTodo.textContent = todo.text;
    document.querySelector('#filtered-todo').appendChild(showTodo)
 })
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

 

// not fucntional yet
 document.querySelector('#add-todo').addEventListener('click', (e) => {
    e.target.textContent = `clicked`;
 });
//  not functional yet
 document.querySelector('#new-todo').addEventListener('input',(e) => {
    filter.text = e.target.value;
    renderTodos(myTodos,filter)
 });