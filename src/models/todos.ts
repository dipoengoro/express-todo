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
    const todo = this._todos.find(todo => todo.id === todoId);
    if (typeof todo === 'undefined') {
      return undefined;
    }
    return todo;
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
    const todo = this.findTodoById(todoId);
    if (typeof todo === 'undefined') {
      return -1;
    }
    todo.setText(text);
    this._todos.push(todo);
    return 0;
  }

  addTodo(todo: Todo): number {
    this._todos.push(todo);
    return 0;
  }
}

export default Todos;