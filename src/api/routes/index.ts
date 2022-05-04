import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';
import userRouter from './userRouter';

// Init router
const router = Router();

class BaseRouter implements IRouter {
  get routes(){
    router.use('/users', userRouter.routes);
    return router;
  }
}

export default new BaseRouter();
