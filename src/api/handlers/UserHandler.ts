
import { User } from 'src/database/entities/User';
import IUserHandler from './interfaces/IUserHandler';

class UserHandler implements IUserHandler {
  async getAll(): Promise<User[]> {
    try {
      return ;
    } catch (error) {
      throw error
    }
  }
}

export default new UserHandler();
