import React from 'react';
import TodoItem from '../TodoItem';
import { Todo } from 'modules/todos';

type TodoListProps = {
  todos: Todo[];
};

function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <ul>
      {todos.length ? todos.map((todo) => <TodoItem todo={todo} key={todo.id} />) : <p>등록된 항목이 없습니다.</p>}
    </ul>
  );
}

export default TodoList;
