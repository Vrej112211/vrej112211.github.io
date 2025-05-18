import React from 'react';
import styles from './footer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteCheckedTodos, selectCheckedTodosIds, selectNotCheckedTodosIds } from '../../../../../../store/slices/todoListSlice/slice';
import close from './svgs/close.svg';

const {listFooter, progressStatus, progressFill, text, removeBtn, disabled} = styles;

const Footer = ({}) => {
    const dispatch = useDispatch();

    const notCheckedTodosIds = useSelector(selectNotCheckedTodosIds);
    const checkedTodosIds = useSelector(selectCheckedTodosIds);

    const totalTodoCount = notCheckedTodosIds.length + checkedTodosIds.length;

    const handleClickRemoveCheckedBtn = e => {
        dispatch(onDeleteCheckedTodos());
    }

    return (
        <div className={listFooter}>
            <div className={progressStatus}>
                <div className={progressFill}
                    style={{
                        '--percent' : checkedTodosIds.length * 100 / totalTodoCount
                    }}
                ></div>
                <div className={text}>{checkedTodosIds.length} of {totalTodoCount} tasks done</div>
            </div>

            <div className={`${removeBtn} ${!checkedTodosIds.length && disabled}`} onClick={!checkedTodosIds.length ? null : handleClickRemoveCheckedBtn}>
                Remove checked <img src={close} />
            </div>
        </div>
    )
}

export default Footer