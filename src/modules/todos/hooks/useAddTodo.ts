import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTodo as add } from 'modules/todos';
import useHandlerHook, { HandlerHook } from 'common/hooks/useHandlerHook';

export default function useAddTodo(): [(text: string) => void, HandlerHook<void>] {
  const dispatch = useDispatch();
  const [handler, useHandler] = useHandlerHook<void>();

  const addTodo = useCallback((text: string) => dispatch(add.request(text, handler)), [dispatch, handler]);

  return [addTodo, useHandler];
}
