import { User } from '../domain/user.entity';
import { RouteRepositoryInterface } from '../domain/user.repository';

class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const user = new User(input);
    await this.routeRepo.insert(user);
    return user.toJSON();
  }
}

type CreateRouteInput = {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
};

type CreateRouteOutput = {
  id?: string;
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
};
