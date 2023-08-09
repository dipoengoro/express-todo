import Todo from './todo';

class Todos {
  private readonly _todos: Todo[];

  constructor() {
    this._todos = [];
  }

  get getAll(): Todo[] {
    return this._todos;
  }

  findTodoById(todoId: string): Todo | undefined {
    const foundTodo = this._todos.find(todo => todo.id === todoId);
    if (!foundTodo) {
      return undefined;
    }
    return foundTodo;
  }

  deleteTodoById(todoId: string): number {
    const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
      return -1;
    }
    this._todos.splice(todoIndex, 1);
    return todoIndex;
  }

  updateTodo(todoId: string, text: string): number {
    const foundTodo = this.findTodoById(todoId);
    if (!foundTodo) {
      return -1;
    }
    const updateTodo = foundTodo.setText(text);
    if (updateTodo < 0) {
      return -2;
    }
    return 0;

  }

  addTodo(todo: Todo): number {
    const {id} = todo;
    const foundTodo = this._todos.find(todo => todo.id === id);
    if (foundTodo) {
      return -1;
    }
    if (todo.id === '' || todo.text === '') {
      return -2;
    }
    this._todos.push(todo);
    return 0;
  }

  toJSON() {
    return {
      todos: this._todos
    };
  }
}

export default Todos;