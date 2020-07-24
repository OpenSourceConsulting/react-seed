type ListState<T> = {
  list: T[];
  map: {
    [key: string]: T;
  };
  [key: string]: any;
};

export default ListState;
