import { Router } from 'express';
import UserHandler from '../handlers/UserHandler';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';

const router = Router();

class UserRouter implements IRouter {
  get routes (){
    router.get('/', async (_req, res) => {
      try {
        const users = await UserHandler.getAll();
        return successResponse(res, { users });
      } catch (err) {
        return errorResponse(res, err);
      }
    })

    return router;
  }
}

export default new UserRouter();
