import { User } from '../../entity/User';

export default interface IUserRepository {
  getAll(): Promise<User[]>;
  create(data: User): Promise<User>
}
