import { Thread } from "../Thread";

export interface IThread {
  id: number,
  parent: Thread,
  currentResult: number,
  text: string,
  createdAt: Date,
  owner: string,
  comments: IThread[],
}
