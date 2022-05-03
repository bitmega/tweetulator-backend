import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';

// Init router
const router = Router();

class BaseRouter implements IRouter {
  get routes(){
    // router.use('/users', userRouter.routes);
    return router;
  }
}

export default new BaseRouter();
