
import { Thread } from '../../database/entities/Thread';
import IThreadHandler from './interfaces/IThreadHandler';
import { AppDataSource } from '../../database/data-source';
import { TreeRepository } from 'typeorm';
import { calculateResult, Operator } from '../utils/calculator';

class ThreadHandler implements IThreadHandler {
  repo: TreeRepository<Thread>;

  constructor() {
    this.repo = AppDataSource.getTreeRepository(Thread);
  }

  async getAll(): Promise<Thread[]> {
    try {
      return await this.repo.findTrees({
        relations: ['parent']
      });
    } catch (error) {
      throw error
    }
  }

  async create(payload: { text: string, parentId: number, owner: string }): Promise<Thread> {
    try {
      const newThread = new Thread();

      if (payload.parentId) {
        const parent = await this.repo.findOne({
          where: {
            id: payload.parentId
          }
        });
        newThread.parent = parent;

        const operator = payload.text[0] as Operator;
        const y = parseFloat(payload.text.substring(1));

        newThread.currentResult = calculateResult(operator, parent.currentResult, y);
      } else {
        newThread.currentResult = parseInt(payload.text);
      }

      newThread.text = payload.text;
      newThread.owner = payload.owner;

      return await this.repo.save(newThread);
    } catch (error) {
      throw error
    }
  }
}

export default new ThreadHandler();
