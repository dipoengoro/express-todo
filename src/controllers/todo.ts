import {Request, Response} from 'express';
import Todos from '../models/todos';
import Todo from '../models/todo';

const todos = new Todos();

export const getAllTodo = (_req: Request, res: Response) => {
  res.status(200).json({message: todos.getAll.length > 0 ? todos : 'Nothing in todos'});
};

export const postTodo = (req: Request, res: Response) => {
  const todo: Todo = new Todo(
    req.body.id,
    req.body.text
  );
  const postTodo = todos.addTodo(todo);
  res.status(200).json({message: postTodo >= 0 ? `Success create todo: id: ${todo.id} todo: ${todo.text}` : 'Failed to post'});
};

export const getTodoById = (req: Request, res: Response) => {
  const {id} = req.params;
  const todo = todos.findTodoById(id);
  res.status(200).json({message: typeof todo === 'undefined' ? `Cannot get todo by id: ${req.params.id}` : `Todo: id: ${todo.id} todo: ${todo.text}`});
};

export const putTodoById = (req: Request, res: Response) => {
  const {id} = req.params;
  const {text} = req.body;
  const updateTodo = todos.updateTodo(id, text);
  res.status(201).json({message: updateTodo >= 0 ? `Success update todo: id: ${id} todo: ${text}` : 'Failed to update'});
};

export const deleteTodoById = (req: Request, res: Response) => {
  const {id} = req.params;
  const deleteTodo = todos.deleteTodoById(id);
  res.status(200).json({message: deleteTodo >= 0 ? `Success deleted todo: id: ${id}` : 'Failed to delete'});
};

