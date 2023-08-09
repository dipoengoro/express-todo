import Todo from './todo';

class Todos {
  private static _todos: Todo[] = [];

  static get getAll(): Todo[] {
    return Todos._todos;
  }

  static findTodoById(todoId: string): Todo | undefined {
    const todo = Todos._todos.find(todo => todo.id === todoId);
    if (typeof todo === 'undefined') {
      return undefined;
    }
    return todo;
  }

  static deleteTodoById(todoId: string): number {
    const todoIndex = Todos._todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) {
      return todoIndex;
    }
    Todos._todos.splice(todoIndex, 1);
    return 0;
  }

  static updateTodo(todoId: string, text: string): number {
    const todo = Todos.findTodoById(todoId);
    if (typeof todo === 'undefined') {
      return -1;
    }
    todo.setText(text);
    Todos._todos.push(todo);
    return 0;
  }

  static addTodo(todo: Todo): void {
    Todos._todos.push(todo);
  }
}