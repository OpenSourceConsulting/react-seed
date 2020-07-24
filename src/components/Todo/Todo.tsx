import React from 'react';

import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import { Todo as TodoType } from 'modules/todos/types';

type TodoProps = {
  todos: TodoType[];
};

function Todo({ todos }: TodoProps): JSX.Element {
  return (
    <>
      <TodoInsert />
      <TodoList todos={todos} />
    </>
  );
}

export default Todo;
