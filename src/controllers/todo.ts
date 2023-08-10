import {NextFunction, Request, Response} from 'express';
import Todos from '../models/todos';
import Todo from '../models/todo';
import Default from '../util/default';

const todos = new Todos();

export const getAllTodo = (_req: Request, res: Response) => {
  const isTodo = todos.getAll().length > 0;
  if (isTodo) {
    return res.status(200).json({
      message: Default.RESPONSE_SUCCESS,
      data: todos
    });
  }
  res.status(200).json({message: Default.MESSAGE_TODOS_EMPTY});
};

export const postTodo = (req: Request, res: Response, next: NextFunction) => {
  const {id, text} = req.body;
  const todo: Todo = new Todo(id, text);
  try {
    todos.addTodo(todo);
    const retrieveTodo = todos.findTodoById(id);
    return res.status(200).json({
      message: Default.RESPONSE_SUCCESS,
      data: {
        todo: retrieveTodo
      }
    });
  } catch (e) {
    next(e);
  }
};

export const getTodoById = (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  try {
    const todo = todos.findTodoById(id);
    res.status(200).json({
      message: Default.RESPONSE_SUCCESS,
      data: todo
    });
  } catch (e) {
    next(e);
  }
};

export const putTodoById = (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  const {text} = req.body;
  try {
    todos.updateTodo(id, text);
    res.status(200).json({
      message: Default.RESPONSE_SUCCESS,
      data: todos.findTodoById(id)
    });
  } catch (e) {
    next(e);
  }
};

export const deleteTodoById = (req: Request, res: Response, next: NextFunction) => {
  const {id} = req.params;
  try {
    const todo = todos.findTodoById(id);
    todos.deleteTodoById(id);
    res.status(200).json({
      message: Default.RESPONSE_SUCCESS,
      data: todo
    });
  } catch (e) {
    next(e);
  }
};