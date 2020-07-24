import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodo, removeTodo, Todo } from 'modules/todos';
import useHandlerHook from 'common/hooks/useHandlerHook';

export default function useTodoActions(todo: Todo) {
  const dispatch = useDispatch();
  const [handler, useHandler] = useHandlerHook<void>();

  const onToggle = useCallback(() => {
    todo.done = !todo.done;
    dispatch(toggleTodo.request(todo, handler));
  }, [dispatch, todo, handler]);
  const onRemove = useCallback(() => dispatch(removeTodo.request(todo.id)), [dispatch, todo]);

  return { onToggle, onRemove, useHandler };
}
