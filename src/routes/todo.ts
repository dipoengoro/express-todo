import {Request, Response, Router} from 'express';

const router = Router();

router.route('/')
  .get((_req: Request, res: Response) => {
    res.status(200).json({message: 'Get All todos'});
  })
  .post((req: Request, res: Response) => {
    res.status(202).json({message: `Success create todo: id: ${req.body.todoId} todo: ${req.body.todo}`});
  });


router.route('/:todoId')
  .get((req: Request, res: Response) => {
    res.status(200).json({message: `Get todo with Id: ${req.params.todoId}`});
  })
  .put((req: Request, res: Response) => {
    res.status(200).json({message: `Success edit todo: id: ${req.params.todoId} todo: ${req.body.todo}`});
  })
  .delete((req: Request, res: Response) => {
    res.status(200).json({message: `Success delete todo: id: ${req.params.todoId}`});
  });

export default router;