import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/user.repository';

export class ListAllUserUseCase {
  constructor(private routeRepo: UserRepositoryInterface) {}

  async execute(): Promise<CreateUserOutput> {
    const users = await this.routeRepo.findAll();
    return users.map((r) => r.toJSON());
  }
}

type CreateUserOutput = {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
}[];
