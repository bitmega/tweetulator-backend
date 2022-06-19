import { Entity, Column } from 'typeorm';
import { Base } from './Base';
import { IUser } from './interfaces';

@Entity()
export class User extends Base implements IUser {
  @Column({ name: 'email' })
  email: string
}
