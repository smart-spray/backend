export interface IRepository<T> {
  create(item: T): Promise<T>;
  update(id: string, item: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
  findAll(filter?: Partial<T>): Promise<T[]>;
  findById(id: string): Promise<T>;
  findByName(name: string): Promise<T>;
}
