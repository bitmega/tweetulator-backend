import * as dotenv from 'dotenv';

export class Environment {
  static setup(): void {
    dotenv.config();
  }
}
