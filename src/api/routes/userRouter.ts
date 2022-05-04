import { Request, Response, Router } from 'express';
import { IRouter } from './interfaces/IRouter';

const router = Router();

class UserRouter implements IRouter{
  get routes(){
    router.get('/', async (req: Request, res: Response) => {
      try {
        return res.send({});
      } catch (err) {
        throw err;
      }
    });
    return router;
  }
}

export default new UserRouter();
