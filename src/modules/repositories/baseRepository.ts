import { IRepository } from "./repository";

export class BaseRepository<T> implements IRepository<T> {
  private BaseModel: any;

  constructor(model: any) {
    this.BaseModel = model;
  }

  async create(item: T): Promise<T> {
    return await this.BaseModel.create(item);
  }
  update(id: string, item: Partial<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(filter?: Partial<T>): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
