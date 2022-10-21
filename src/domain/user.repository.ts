import { User } from './user.entity';

export interface RouteRepositoryInterface {
  insert(user: User): Promise<void>;
}
