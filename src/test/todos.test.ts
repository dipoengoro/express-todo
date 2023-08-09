import Todo from '../models/todo';
import Todos from '../models/todos';

test('Todos behave correctly', () => {
  const todo1 = new Todo('1', 'To sleep');
  const todo2 = new Todo('2', 'To awake');
  expect(Todos.getAll).toEqual([]);
  Todos.addTodo(todo1);
  Todos.addTodo(todo2);
  expect(Todos.getAll).toEqual([todo1, todo2]);
  expect(Todos.findTodoById(todo1.id)).toEqual(todo1);
  expect(Todos.updateTodo(todo2.id, 'To eat')).toBeGreaterThanOrEqual(0);
  expect(Todos.updateTodo('3', 'To eat')).toBeLessThan(0);
  expect(Todos.deleteTodoById(todo2.id)).toBeGreaterThanOrEqual(0);
  expect(Todos.deleteTodoById('3')).toBeLessThan(0);
});