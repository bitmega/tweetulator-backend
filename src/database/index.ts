export interface IDatabase {
  setup(): Promise<any>;
}

class Database implements IDatabase {
  async setup() {}
}

export default new Database();
