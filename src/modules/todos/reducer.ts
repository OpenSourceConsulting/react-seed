import { createReducer, ActionType } from 'typesafe-actions';
import { TodosState } from './types';
import * as actions from './actions';
import { keyBy } from 'lodash';

export type TodosAction = ActionType<typeof actions>;

const { fetchTodo, toggleTodo } = actions;

// 초기값 설정
const initialState: TodosState = {
  list: [],
  map: {},
};

const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(fetchTodo.success, (state, { payload: todos }) => ({
    list: todos,
    map: keyBy(todos, 'id'),
  }))
  .handleAction(toggleTodo.failure, (state, { payload, handler }) => {
    if (handler?.failure) {
      handler.failure(payload);
    }
    return state;
  });

export default todos;
