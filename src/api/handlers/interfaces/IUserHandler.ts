import { User } from 'src/database/entity/User';

export default interface IUserHandler {
  getAll(): Promise<User[]>
}
