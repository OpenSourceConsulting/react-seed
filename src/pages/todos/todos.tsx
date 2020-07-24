import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useTodos from 'modules/todos/hooks/useTodos';
import useTodosActions from 'modules/todos/hooks/useTodosActions';
import Todo from 'components/Todo';
import { Todo as TodoType } from 'modules/todos';

function Todos(): JSX.Element {
  const { t } = useTranslation();

  const todos: TodoType[] = useTodos();
  const [getTodos] = useTodosActions();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <>
      <Todo todos={todos} />
      <div style={{ margin: '2rem 0 0 2rem' }}>
        <Link to="/">{t('Go to homepage')}</Link>
      </div>
    </>
  );
}

export default Todos;
