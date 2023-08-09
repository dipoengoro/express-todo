import Todo from '../models/todo';

describe('Todo', () => {
  const todoId = '123';
  const todoText = 'Buy groceries';

  it('should create a todo item with valid ID and text', () => {
    const todo = new Todo(todoId, todoText);
    expect(todo.id).toBe(todoId);
    expect(todo.text).toBe(todoText);
  });

  it('should throw an error if ID or text is empty', () => {
    expect(() => new Todo('', todoText)).toThrow('Both id and text cannot be empty');
    expect(() => new Todo(todoId, '')).toThrow('Both id and text cannot be empty');
  });

  it('should set and get the todo text', () => {
    const todo = new Todo(todoId, todoText);
    const newText = 'Cook dinner';
    todo.setText(newText);
    expect(todo.text).toBe(newText);
  });

  it('should throw an error when setting empty text', () => {
    const todo = new Todo(todoId, todoText);
    expect(() => todo.setText('')).toThrow('newText cannot be empty');
  });

  it('should convert todo to JSON', () => {
    const todo = new Todo(todoId, todoText);
    const json = todo.toJSON();
    expect(json).toEqual({_id: todoId, text: todoText});
  });
});
