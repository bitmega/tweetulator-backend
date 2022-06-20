import { Validate } from 'class-validator';
import { Entity, Column, Tree, TreeParent, TreeChildren } from 'typeorm';
import { ThreadText } from '../validators/Thread';
import { Base } from './Base';
import { IThread } from './interfaces/IThread';

@Entity()
@Tree("closure-table")
export class Thread extends Base implements IThread {
  @TreeParent()
  parent: Thread

  @TreeChildren()
  comments: Thread[];

  @Column({ name: 'current_result', type: 'float' })
  currentResult: number

  @Column({ name: 'text' })
  @Validate(ThreadText)
  text: string

  @Column({ name: 'owner' })
  owner: string
}
