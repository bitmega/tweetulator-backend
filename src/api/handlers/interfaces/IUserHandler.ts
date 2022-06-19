import { User } from 'src/database/entities/User';

export default interface IUserHandler {
  getAll(): Promise<User[]>
}
