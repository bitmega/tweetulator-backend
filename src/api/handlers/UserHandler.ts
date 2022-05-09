import UserRepository from '../../database/repostories/UserRepository';
import IUserHandler from './interfaces/IUserHandler';

class UserHandler implements IUserHandler {
  async getAll() {
    try {
      const users = await UserRepository.getAll();
      return users;
    } catch (error) {
      throw error
    }
  }
}

export default new UserHandler();
