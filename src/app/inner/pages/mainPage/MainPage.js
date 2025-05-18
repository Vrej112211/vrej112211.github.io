import React from 'react';
import styles from './mainPage.module.scss';
import TodoList from './components/todoList/TodoList';

const {page, todoListContainer} = styles;

const MainPage = () => {
    return (
        <div className={page}>
            <div className={todoListContainer}>
                <TodoList />
            </div>
        </div>
    )
}

export default MainPage