import Todo from '../models/todo';
import Default from '../util/default';
import MyError from './my-error';

class Todos {
  private readonly _todos: Todo[];

  constructor() {
    this._todos = [];
  }

  findTodoById(todoId: string): Todo {
    const foundTodo = this._todos.find(todo => todo.id === todoId);
    if (!foundTodo) {
      throw new MyError(Default.MESSAGE_TODO_NOT_FOUND, Default.ERROR_400);
    }
    return foundTodo;
  }

  deleteTodoById(todoId: string): void {
    const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
      throw new MyError(Default.MESSAGE_TODO_NOT_FOUND, Default.ERROR_400);
    }
    this._todos.splice(todoIndex, 1);
  }

  updateTodo(todoId: string, text: string): void {
    this.validateIdText(todoId);
    const foundTodo = this.findTodoById(todoId);
    if (foundTodo.text !== text) {
      foundTodo.setText(text);
    }
  }

  addTodo(todo: Todo): void {
    const {id} = todo;
    this.validateIdText(id);
    const foundTodo = this._todos.find(todo => todo.id === id);
    if (foundTodo) {
      throw new MyError(Default.MESSAGE_TODO_NOT_FOUND, Default.ERROR_400);
    }
    this._todos.push(todo);
  }

  getAll(): Todo[] {
    return this._todos.slice();
  }

  toJSON() {
    return this._todos;
  }

  private validateIdText(id: string) {
    if (id === '') {
      throw new MyError(Default.MESSAGE_ID_EMPTY, Default.ERROR_400);
    }
  }
}

export default Todos;
