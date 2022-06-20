import { Router } from 'express';
import { IRouter } from './interfaces/IRouter';
import threadRouter from './threadRouter';

// Init router
const router = Router();

class BaseRouter implements IRouter {
  get routes(){
    router.use('/threads', threadRouter.routes)
    return router;
  }
}

export default new BaseRouter();
