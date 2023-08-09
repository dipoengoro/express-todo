import Todo from '../models/todo';

test('Todo behave correctly', () => {
  const todo = new Todo('1', 'To sleep');
  expect(todo).toBeInstanceOf(Todo);
  expect(todo).toEqual({__id: '1', _text: 'To sleep'});
  expect(todo.id).toBe('1');
  expect(todo.text).toBe('To sleep');
  todo.setText('To awake');
  expect(todo.text).toBe('To awake');
});