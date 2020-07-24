import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducers';
import { Todo } from '../types';

export default function useTodos(): Todo[] {
  const todos = useSelector((state: RootState) => state.todos.list);
  return todos;
}
