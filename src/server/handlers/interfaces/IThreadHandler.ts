import { Thread } from 'src/database/entities/Thread';

export default interface IThreadHandler {
  getAll(): Promise<Thread[]>
}
