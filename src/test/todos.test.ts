import Todos from '../models/todos';
import Todo from '../models/todo';

describe('Todos', () => {
  let todos: Todos;
  const todoId = '123';
  const todoText = 'Buy groceries';
  const anotherTodoId = '456';
  const anotherTodoText = 'Walk the dog';

  beforeEach(() => {
    todos = new Todos();
  });

  it('should add a todo', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    expect(todos.getAll().length).toBe(1);
  });

  it('should throw an error when adding a todo with empty id or text', () => {
    expect(() => todos.addTodo(new Todo('', todoText))).toThrow('Both id and text cannot be empty');
    expect(() => todos.addTodo(new Todo(todoId, ''))).toThrow('Both id and text cannot be empty');
  });

  it('should find a todo by ID', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    const foundTodo = todos.findTodoById(todoId);
    expect(foundTodo).toEqual(todo);
  });

  it('should throw an error when finding a non-existent todo', () => {
    expect(() => todos.findTodoById('456')).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should delete a todo by ID', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    todos.deleteTodoById(todoId);
    expect(todos.getAll().length).toBe(0);
  });

  it('should throw an error when deleting a non-existent todo', () => {
    expect(() => todos.deleteTodoById('456')).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should update a todo', () => {
    const updatedText = 'Buy fruits';
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    todos.updateTodo(todoId, updatedText);
    const updatedTodo = todos.findTodoById(todoId);
    expect(updatedTodo.text).toBe(updatedText);
  });

  it('should not update a todo if the text is the same', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    todos.updateTodo(todoId, todoText);
    const updatedTodo = todos.findTodoById(todoId);
    expect(updatedTodo.text).toBe(todoText);
  });

  it('should throw an error when updating a non-existent todo', () => {
    expect(() => todos.updateTodo('456', 'New text')).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should get all todos', () => {
    const todo1 = new Todo('123', 'Buy groceries');
    const todo2 = new Todo('456', 'Walk the dog');
    todos.addTodo(todo1);
    todos.addTodo(todo2);
    const allTodos = todos.getAll();
    expect(allTodos).toEqual([todo1, todo2]);
  });
  it('should throw an error when adding a duplicate todo', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    expect(() => todos.addTodo(new Todo(todoId, 'Buy fruits'))).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should throw an error when deleting a non-existent todo', () => {
    expect(() => todos.deleteTodoById(todoId)).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should throw an error when updating a non-existent todo', () => {
    expect(() => todos.updateTodo(todoId, 'New text')).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should throw an error when updating a todo with empty text', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    expect(() => todos.updateTodo(todoId, '')).toThrow('Both id and text cannot be empty');
  });


  it('should not find a todo by ID after it was deleted', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    todos.deleteTodoById(todoId);
    expect(() => todos.findTodoById(todoId)).toThrow('Unable to retrieve the todo with the given ID.');
  });

  it('should not find a non-existent todo by ID without modifying the list', () => {
    const todo = new Todo(todoId, todoText);
    todos.addTodo(todo);
    const originalTodos = todos.getAll();
    expect(() => todos.findTodoById(anotherTodoId)).toThrow('Unable to retrieve the todo with the given ID.');
    expect(todos.getAll()).toEqual(originalTodos);
  });

  it('should return an empty array when getting all todos and the list is empty', () => {
    const allTodos = todos.getAll();
    expect(allTodos).toEqual([]);
  });

  it('should return JSON representation of todos', () => {
    const todo1 = new Todo(todoId, todoText);
    const todo2 = new Todo(anotherTodoId, anotherTodoText);
    todos.addTodo(todo1);
    todos.addTodo(todo2);

    const expectedJSON = {
      todos: [
        {_id: todoId, text: todoText},
        {_id: anotherTodoId, text: anotherTodoText},
      ],
    };

    const todosJSON = todos.toJSON();
    const actualJSON = {
      todos: todosJSON.map(todo => ({
        _id: todo.id,
        text: todo.text,
      })),
    };

    expect(actualJSON).toEqual(expectedJSON);
  });
});
