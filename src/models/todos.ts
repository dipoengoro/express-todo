import Todo from './todo';

class Todos {
  private readonly _todos: Todo[];

  constructor() {
    this._todos = [];
  }

  get getAll(): Todo[] {
    return this._todos;
  }

  findTodoById(todoId: string): Todo {
    const foundTodo = this._todos.find(todo => todo.id === todoId);
    if (!foundTodo) {
      throw new Error('Unable to retrieve the todo with the given ID.');
    }
    return foundTodo;
  }

  deleteTodoById(todoId: string): void {
    const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
      throw new Error('Unable to retrieve the todo with the given ID.');
    }
    this._todos.splice(todoIndex, 1);
  }

  updateTodo(todoId: string, text: string): void {
    const foundTodo = this.findTodoById(todoId);
    if (!foundTodo) {
      throw new Error('Unable to retrieve the todo with the given ID.');
    }
    foundTodo.setText(text);
  }

  addTodo(todo: Todo): void {
    const {id} = todo;
    const foundTodo = this._todos.find(todo => todo.id === id);
    if (foundTodo) {
      throw new Error('Unable to retrieve the todo with the given ID.');
    }
    if (todo.id === '' || todo.text === '') {
      throw new Error('Both id and text cannot be empty');
    }
    this._todos.push(todo);
  }

  toJSON() {
    return {
      todos: this._todos
    };
  }
}

export default Todos;