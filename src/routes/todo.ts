import {Router} from 'express';
import {deleteTodoById, getAllTodo, getTodoById, postTodo, putTodoById} from '../controllers/todo';

const router = Router();

router.route('/')
  .get(getAllTodo)
  .post(postTodo);


router.route('/:id')
  .get(getTodoById)
  .put(putTodoById)
  .delete(deleteTodoById);

export default router;