import { UserInMemoryRepository } from '../infra/db/user-in-memory.repository';
import { CreateUserUseCase } from './create-user.use-case';

describe('UserRouteUseCase Tests', () => {
  it('should create a new user', async () => {
    const repository = new UserInMemoryRepository();
    const createUseCase = new CreateUserUseCase(repository);
    const output = await createUseCase.execute({
      age: 12,
      categories: ['carros', 'anime'],
      email: 'email@gmail.com',
      name: 'test',
      password: 'kjaskdjfkalsdfje234'
    });
    expect(repository.items).toHaveLength(1);
    expect(output).toEqual({
      id: repository.items[0].id,
      age: 12,
      categories: ['carros', 'anime'],
      email: 'email@gmail.com',
      name: 'test',
      password: 'kjaskdjfkalsdfje234'
    });
  });
});
