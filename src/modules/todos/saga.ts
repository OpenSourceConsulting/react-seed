import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import { addTodo, toggleTodo, removeTodo, fetchTodo } from './actions';
import { Todo } from './types';
import ApiFailure from 'common/types/ApiFailure';
import { ActionType } from 'typesafe-actions';

// service for test start
function apiGetTodos(): Todo[] {
  const todosString = localStorage.getItem('db_todos');
  return todosString ? JSON.parse(todosString) || [] : [];
}

function apiAddTodo(text: string) {
  const todos = apiGetTodos();
  const id = Math.max(...todos.map(({ id }) => id)) + 1;
  todos.push({ id, text, done: false });
  localStorage.setItem('db_todos', JSON.stringify(todos));
}

function apiUpdateTodo(todo: Todo) {
  const todos = apiGetTodos();
  const foundTodo = todos.find(({ id }) => id === todo.id);
  if (foundTodo) {
    foundTodo.done = todo.done;
  }
  localStorage.setItem('db_todos', JSON.stringify(todos));
}

function apiRemoveTodo(pId: number) {
  const todos = apiGetTodos();
  const index = todos.findIndex(({ id }) => id === pId);
  if (index > -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem('db_todos', JSON.stringify(todos));
}
// service for test end

// todo list start
function* todoRequest() {
  yield delay(100);

  // [
  //   { id: 1, text: '타입스크립트 배우기', done: true },
  //   { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  //   { id: 3, text: '투두리스트 만들기', done: false }
  // ]

  // yield put({ type: todoActions.TODOS_SUCCESS, payload: apiGetTodos()});
  yield put(fetchTodo.success(apiGetTodos()));
}

export function* watchTodos() {
  yield takeLatest(fetchTodo.request, todoRequest);
}
// todo list end

// add todo start
function* addTodoRequest(action: ActionType<typeof addTodo.request>) {
  apiAddTodo(action.payload);

  yield delay(100);

  yield put(addTodo.success());

  yield put(fetchTodo.request());
}

export function* watchAddTodo() {
  yield takeLatest(addTodo.request, addTodoRequest);
}
// add todo end

// toggle todo start
function* toggleTodoRequest(action: ActionType<typeof toggleTodo.request>) {
  try {
    throw {}; // throw to test error handle

    apiUpdateTodo(action.payload);

    yield delay(100);

    yield put(toggleTodo.success());
  } catch (e) {
    yield put(
      toggleTodo.failure(
        {
          errorCode: 100,
          errorMessage: 'Test Failure',
        } as ApiFailure,
        action.handler,
      ),
    );
  } finally {
    yield put(fetchTodo.request());
  }
}

export function* watchToggleTodo() {
  yield takeLatest(toggleTodo.request, toggleTodoRequest);
}
// toggle todo end

// remove todo start
function* removeTodoRequest(action: ActionType<typeof removeTodo.request>) {
  apiRemoveTodo(action.payload);

  yield delay(100);

  yield put(removeTodo.success());

  yield put(fetchTodo.request());
}

export function* watchRemoveTodo() {
  yield takeLatest(removeTodo.request, removeTodoRequest);
}
// remove todo end

export default function* todosSaga() {
  yield all([fork(watchTodos), fork(watchAddTodo), fork(watchToggleTodo), fork(watchRemoveTodo)]);
}
