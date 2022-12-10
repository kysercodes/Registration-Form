const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    return JSON.parse(todosJSON)
} else {
    return [];
}
};
// Generate the DOM structure for a todo
const generateTodoDom = (todo) => {
    const filteredTodo = document.createElement('p');
    filteredTodo.textContent = todo.text;
    return filteredTodo;
}

// remder todo notes
function renderTodos(todos, filters) {
    // filters todos that match filter object
    let filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.text.toLowerCase());
        debugger
    });
   
    filteredTodos = filteredTodos.filter((todo) => {
        return !filters.completed || !todo.completed;
    });

    // clears todos 
    document.querySelector('#filtered-todo').textContent = '';
    // renders freshly filtered todos to page
    filteredTodos.forEach((todo) => {
        
        document.querySelector('#filtered-todo').appendChild(generateTodoDom(todo));
    });
    //  creates an array of objects containing incomplete todos
    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
    });
    // lets you know how many todos you have left to complete
    getSummaryDom(incompleteTodos)
    
}

const getSummaryDom = (incompleteTodos) => {
    const summary = document.createElement('h4');
    summary.textContent = `You have ${incompleteTodos.length} todos left!`;
    document.querySelector('#filtered-todo').appendChild(summary);
}

const saveTodos = () => {
    localStorage.setItem('todos',JSON.stringify(myTodos))
}