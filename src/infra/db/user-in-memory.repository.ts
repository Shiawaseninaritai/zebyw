import { User } from '../../domain/user.entity';
import { UserRepositoryInterface } from '../../domain/user.repository';

export class UserInMemoryRepository implements UserRepositoryInterface {
  items: User[] = [];
  async insert(user: User): Promise<void> {
    this.items.push(user);
  }
}
