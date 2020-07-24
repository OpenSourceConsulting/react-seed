import asyncAction from 'common/lib/asyncAction';
import ApiFailure from 'common/types/ApiFailure';
import { Todo } from './types';

const PREFIX = 'todos/';

export const fetchTodo = asyncAction<void, Todo[], ApiFailure>(`${PREFIX}TODO`);
export const addTodo = asyncAction<string, void, ApiFailure>(`${PREFIX}ADD_TODO`);
export const toggleTodo = asyncAction<Todo, void, ApiFailure>(`${PREFIX}TOGGLE_TODO`);
export const removeTodo = asyncAction<number, void, ApiFailure>(`${PREFIX}REMOVE_TODO`);
