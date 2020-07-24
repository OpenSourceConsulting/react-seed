import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducers';
import { Todo } from '../types';

export default function useTodo(id: number): Todo {
  const todo = useSelector((state: RootState) => state.todos.map[id]);
  return todo;
}
