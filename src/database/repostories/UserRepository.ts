import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import IUserRepository from './interfaces/IUserRepository';

class UserRepository implements IUserRepository {
  repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  getAll(): Promise<User[]> {
    return this.repo.find();
  }

  create(data: User): Promise<User> {
    return this.repo.save(data);
  }
}

export default new UserRepository();
