export interface ITodo {
  id: string;
  text: string;
  done: boolean;
}

export interface IInfo {
  [key: string]: number;
}

export interface ITodoStore {
  todos: ITodo[];
  info: IInfo;
  addTodo: (todo: ITodo) => void;
  updateTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  completeActiveTodos: () => void;
  removeCompletedTodos: () => void;
  updateInfo: () => void;
}
