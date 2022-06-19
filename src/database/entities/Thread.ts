import { Entity, Column, Tree, TreeParent, TreeChildren } from 'typeorm';
import { Base } from './Base';
import { IThread } from './interfaces/IThread';

@Entity()
@Tree("closure-table")
export class Thread extends Base implements IThread {
  @TreeParent()
  parent: Thread

  @TreeChildren()
  comments: Thread[];

  @Column({ name: 'current_result' })
  currentResult: number

  @Column({ name: 'text' })
  text: string

  @Column({ name: 'owner' })
  owner: string
}
