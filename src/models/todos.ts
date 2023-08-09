import Todo from '../models/todo';

class Todos {
  private readonly _todos: Todo[];
  private readonly TODO_NOT_FOUND_ERROR = 'Unable to retrieve the todo with the given ID.';
  private readonly EMPTY_ID_TEXT_ERROR = 'Both id and text cannot be empty';

  constructor() {
    this._todos = [];
  }

  findTodoById(todoId: string): Todo {
    const foundTodo = this._todos.find(todo => todo.id === todoId);
    if (!foundTodo) {
      throw new Error(this.TODO_NOT_FOUND_ERROR);
    }
    return foundTodo;
  }

  deleteTodoById(todoId: string): void {
    const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
      throw new Error(this.TODO_NOT_FOUND_ERROR);
    }
    this._todos.splice(todoIndex, 1);
  }

  updateTodo(todoId: string, text: string): void {
    this.validateIdText(todoId, text);
    const foundTodo = this.findTodoById(todoId);
    if (foundTodo.text !== text) {
      foundTodo.setText(text);
    }
  }

  addTodo(todo: Todo): void {
    const {id, text} = todo;
    this.validateIdText(id, text);
    const foundTodo = this._todos.find(todo => todo.id === id);
    if (foundTodo) {
      throw new Error(this.TODO_NOT_FOUND_ERROR);
    }
    this._todos.push(todo);
  }

  getAll(): Todo[] {
    return this._todos.slice();
  }

  toJSON() {
    return {
      todos: this._todos,
    };
  }

  private validateIdText(id: string, text: string) {
    if (id === '' || text === '') {
      throw new Error(this.EMPTY_ID_TEXT_ERROR);
    }
  }
}

export default Todos;
