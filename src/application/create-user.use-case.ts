import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/user.repository';

export class CreateUserUseCase {
  constructor(private routeRepo: UserRepositoryInterface) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = new User(input);
    await this.routeRepo.insert(user);
    return user.toJSON();
  }
}

type CreateUserInput = {
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
};

type CreateUserOutput = {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  categories: string[];
};
