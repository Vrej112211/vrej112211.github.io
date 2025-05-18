import React, { useRef } from 'react';
import styles from './todoCreator.module.scss';

const { cont_form, inputContainer } = styles;

const TodoCreator = ({ onCreateTodo }) => {
    const inputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        if (inputRef.current.value) {
            onCreateTodo(inputRef.current.value);
            inputRef.current.value = '';
        }

    }

    return (
        <form className={ cont_form } onSubmit={ handleSubmit }>
            <div className={ inputContainer }>
                <input ref={ inputRef } placeholder='what needs to be done?' />

                <button>+</button>
            </div>
        </form>
    )
}

export default TodoCreator