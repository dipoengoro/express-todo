import {Request, Response} from 'express';

interface Todo {
  id: string;
  todo: string;
}

let todos: Todo[] = [
  {
    id: '1',
    todo: 'First todo'
  }
];
export const getAllTodo = (_req: Request, res: Response) => {
  res.status(200).json({message: todos.length > 0 ? todos : 'Nothing in todos'});
};

export const postTodo = (req: Request, res: Response) => {
  const todo: Todo = {
    id: req.body.id,
    todo: req.body.todo
  };
  todos.push(todo);
  res.status(200).json({message: `Success create todo: id: ${todo.id} todo: ${todo.todo}`});
};

export const getTodoById = (req: Request, res: Response) => {
  const todo = todos.find(todo => todo.id === req.params.id);
  res.status(200).json({message: typeof todo === 'undefined' ? `Cannot get todo by id: ${req.params.id}` : `Todo: id: ${todo.id} todo: ${todo.todo}`});
};

export const putTodoById = (req: Request, res: Response) => {
  let todo = todos.find(todo => todo.id === req.params.id);
  if (typeof todo === 'undefined') {
    return res.status(404).json({message: `Cannot find todo with id: ${req.params.id}`});
  }
  todo.todo = req.body.todo;
  todos.push(todo);
  res.status(201).json({message: `Success update todo: id: ${todo.id} todo: ${todo.todo}`});
};

export const deleteTodoById = (req: Request, res: Response) => {
  const {id} = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.status(200).json({message: `Success deleted todo: id: ${id}`});
};

