import { User } from '../../../database/entity/User';

export default interface IUserHandler {
  getAll(): Promise<User[]>
}
