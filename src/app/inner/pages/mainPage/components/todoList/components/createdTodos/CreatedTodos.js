import React, { useCallback } from 'react';
import styles from './createdTodos.module.scss';
import Todo from './components/todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../../../../../store/slices/todoListSlice/slice';
import {onCheckedChange as onCheckedChange_slice, onTextChange as onTextChange_slice, onDelete as onDelete_slice} from '../../../../../../store/slices/todoListSlice/slice';

const { createdTodosCont } = styles;

const CreatedTodos = () => {
    const dispatch = useDispatch();

    const todos = useSelector(selectTodos);

    const onCheckedChange = useCallback((todoId, isChecked) => {
        dispatch(onCheckedChange_slice({todoId, isChecked}));
    }, []);
    const onTextChange = useCallback((todoId, newText) => {
        dispatch(onTextChange_slice({todoId, newText}));
    }, []);
    const onDelete = useCallback((todoId) => {
        dispatch(onDelete_slice({todoId}));
    }, []);

    return (
        <ul className={ createdTodosCont }>
            {
                todos.map(todoInfo => {
                    return (
                        <Todo
                            key={todoInfo.id}
                            todoId={ todoInfo.id }
                            text={ todoInfo.text }
                            isChecked={ todoInfo.isChecked }

                            onCheckedChange={ onCheckedChange }
                            onTextChange={ onTextChange }
                            onDelete={ onDelete }
                        />
                    )
                })
            }
            {/* <Todo isChecked={true} text={'Read the book'} /> */ }
        </ul>
    )
}

export default CreatedTodos