// Read todos in local storage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('myTodos')
    
    if (todoJSON !== null) {
    
        return JSON.parse(todoJSON);
    
    } else {
        return [];
    }

}

// Save todos to local storage
const saveTodos = (myTodos) => {
    return localStorage.setItem('myTodos',JSON.stringify(myTodos));
}



// Renders todos
const renderTodos = (myTodos,filters) => {

    let filteredTodos = myTodos.filter((todo) => {
         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
     });
     
     filteredTodos = filteredTodos.filter((todo) => {
         return !filters.hideCompleted || !todo.completed;
     })
 
     const incompleteTodos = filteredTodos.filter((todo) => {
         return !todo.completed;
     });
       
     //  clears todos
     document.querySelector('#todos').innerHTML = ''
    //  
     generateSummaryDom(incompleteTodos);
     
     
    
     filteredTodos.forEach((todo) => {
       
       document.querySelector('#todos').appendChild(generateTodoDom(todo))
     });
     
      
}
// generates todo element
const generateTodoDom = (todo) => {
    const p = document.createElement('p');
    p.textContent = todo.text;
        
    return p;
}
// generates summary text telling how many todos are left
const generateSummaryDom = (todos) => {
    const todosLeft = document.createElement('h3')
    todosLeft.textContent = `You have ${todos.length} todos left.`;
    document.querySelector('#todos').appendChild(todosLeft);
}
