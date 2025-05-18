import React, { memo, useEffect, useRef, useState } from 'react';
import close from './svgs/close.svg';
import edit from './svgs/edit.svg';
import edit2 from './svgs/edit_2.svg';
import styles from './todo.module.scss';

const { todo, toolIcon, checked, editing, warning } = styles;

const Todo = ({ isChecked, text: text_default,  todoId,   onCheckedChange, onTextChange, onDelete }) => {

    const [ text, setText ] = useState(text_default);

    const [ isEditing, setIsEditing ] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
    }, [isEditing]);

    const handleInput = e => {
        setText(e.target.value);
    }
    const handleInputEnd = e => {
        setIsEditing(false);
        onTextChange(todoId, text);
    }
    const handleChange = e => {
        onCheckedChange(todoId, e.target.checked);
    }
    const handleClickEditToolIcon = e => {
        setIsEditing(true);
    }
    const handleDelete = e => {
        onDelete(todoId);
    }
    const handleInputKeyDown = e => {
        if (e.key === 'Enter') {
            handleInputEnd(e);
        }
    }

    return (
        <li className={ `${todo} ${isChecked && checked} ${isEditing && editing} ${!text && warning}` }>
            <label>
                <input type='checkbox' checked={ isChecked } onChange={ handleChange } />
                {
                    isEditing ?
                        <input ref={inputRef} type='text' value={ text } 
                            onInput={handleInput} 
                            onBlur={handleInputEnd} 
                            onKeyDown={handleInputKeyDown}
                        /> :
                        <span>{ text }</span>
                }
            </label>

            <div className={ toolIcon } onClick={ handleClickEditToolIcon } >
                <img src={ isEditing ? edit2 : edit } />
            </div>
            <div className={ toolIcon } onClick={handleDelete} >
                <img src={ close } />
            </div>
        </li>
    )
}

export default memo(Todo);