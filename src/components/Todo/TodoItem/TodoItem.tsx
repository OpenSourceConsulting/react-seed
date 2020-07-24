import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames/bind';

import { Todo } from 'modules/todos/types';
import useTodoActions from 'modules/todos/hooks/useTodoActions';

import styles from './TodoItem.module.scss';
import ApiFailure from 'common/types/ApiFailure';
const cx = classNames.bind(styles);

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps): JSX.Element {
  const { onToggle, onRemove, useHandler } = useTodoActions(todo);

  useEffect(() => {
    useHandler.onFailure((failure: ApiFailure) => {
      console.log(failure);
    });
  }, [useHandler]);

  const onClickToggle = useCallback(
    (e) => {
      onToggle();
    },
    [onToggle],
  );

  return (
    <li className={cx('TodoItem', { done: todo.done })}>
      <span className={styles.text} onClick={onClickToggle}>
        {todo.text}
      </span>
      <span className={cx('remove')} onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
