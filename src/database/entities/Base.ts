import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

interface IBase {
  id: number,
  createdAt: Date
}

export abstract class Base implements IBase {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
