import { User } from '../domain/user.entity';
import { RouteRepositoryInterface } from '../domain/user.repository';

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: User[] = [];
  async insert(user: User): Promise<void> {
    this.items.push(user);
  }
}
