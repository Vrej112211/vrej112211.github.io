const setTodoListToLocalStorage = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
}

export default setTodoListToLocalStorage;