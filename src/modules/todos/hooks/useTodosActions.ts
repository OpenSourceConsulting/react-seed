import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchTodo, Todo } from 'modules/todos';
import useHandlerHook, { HandlerHook } from 'common/hooks/useHandlerHook';

export default function useTodosActions(): [(payload: void) => void, HandlerHook<Todo[]>] {
  const dispatch = useDispatch();
  const [handler, useHandler] = useHandlerHook<Todo[]>();

  const fetTodos = useCallback((payload: void) => dispatch(fetchTodo.request(payload, handler)), [dispatch, handler]);

  return [fetTodos, useHandler];
}
