import { Router, Request, Response } from 'express';
import ThreadHandler from '../handlers/ThreadHandler';
import { IRouter } from './interfaces/IRouter';
import { successResponse, errorResponse } from './response';

const router = Router();

class ThreadRouter implements IRouter {
  get routes (): Router {
    router.get('/', async (_req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
      try {
        const threads = await ThreadHandler.getAll();

        return successResponse(res, threads);
      } catch (err) {
        return errorResponse(res, err);
      }
    })

    router.post('/', async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
      try {
        const { body } = req;

        const thread = await ThreadHandler.create(body);
        return successResponse(res, thread);
      } catch (err) {
        return errorResponse(res, err);
      }
    })

    return router;
  }
}

export default new ThreadRouter();
