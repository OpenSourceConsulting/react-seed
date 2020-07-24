import ListState from 'common/types/ListState';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = ListState<Todo>;
