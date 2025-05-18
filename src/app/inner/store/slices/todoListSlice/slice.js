import { createSlice } from '@reduxjs/toolkit';
import setTodoListToLocalStorage from './functions/setTodoListToLocalStorage';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
}

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    onCheckedChange(state, { payload: { todoId, isChecked } }) {
      state.todos.some(todoInfo => {
        if (todoInfo.id === todoId) {
          todoInfo.isChecked = isChecked;
          return true;
        }
      });

      setTodoListToLocalStorage(state.todos);
    },
    onTextChange(state, { payload: { todoId, newText } }) {
      state.todos.some(todoInfo => {
        if (todoInfo.id === todoId) {
          todoInfo.text = newText;
          return true;
        }
      });

      setTodoListToLocalStorage(state.todos);
    },
    onDelete(state, { payload: { todoId } }) {
      state.todos = state.todos.filter(todoInfo => todoInfo.id !== todoId);

      setTodoListToLocalStorage(state.todos);
    },
    onDeleteCheckedTodos(state) {
      state.todos = state.todos.filter(todoInfo => !todoInfo.isChecked);

      setTodoListToLocalStorage(state.todos);
    },

    addTodo(state, { payload: newTodotext }) {
      state.todos = [
        {
          id: Date.now(),
          text: newTodotext,
          isChecked: false
        },
        ...state.todos
      ];

      setTodoListToLocalStorage(state.todos);
    }
    // const onDelete = useCallback((todoId) => {

    // }, []);
  }
});

export const { onCheckedChange, onTextChange, onDelete, onDeleteCheckedTodos, addTodo } = todoListSlice.actions;

export default todoListSlice;

export const selectTodos = state => state.todoList.todos;
export const selectNotCheckedTodosIds = state => state.todoList.todos.filter(todoInfo => !todoInfo.isChecked).map(todoInfo => todoInfo.id);
export const selectCheckedTodosIds = state => state.todoList.todos.filter(todoInfo => todoInfo.isChecked).map(todoInfo => todoInfo.id);