export class BaseService {
  constructor() {}
  async getAll(entity: any) {
    return { value: `text` };
  }
  async create(entity: any) {
    return { value: 'created text' };
  }
  async update(entity: any) {
    return { value: 'updated text' };
  }
  async delete(entity: any) {
    return { value: 'updated text' };
  }
}