import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import useAddTodo from 'modules/todos/hooks/useAddTodo';

function TodoInsert(): JSX.Element {
  const [value, setValue] = useState('');
  const [addTodo, useAddTodoHandler] = useAddTodo();

  useEffect(() => {
    useAddTodoHandler.onSuccess(() => {
      console.log('success');
    });
  }, [useAddTodoHandler]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
