import React, { useCallback } from 'react';
import styles from './todoList.module.scss';
import TodoCreator from './components/todoCreator/TodoCreator';
import CreatedTodos from './components/createdTodos/CreatedTodos';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../../store/slices/todoListSlice/slice';
import Footer from './components/footer/Footer';

const {container, title} = styles;

const TodoList = () => {
  const dispatch = useDispatch();

  const onCreateTodo = useCallback((newTodoText) => {
    dispatch(addTodo(newTodoText));
  }, []);

  return (
    <div className={container}>
      <div className={title}>TODOLIST</div>

      <TodoCreator onCreateTodo={onCreateTodo} />
      <CreatedTodos />

      <Footer />
    </div>
  )
}

export default TodoList