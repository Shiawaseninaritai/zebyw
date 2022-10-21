import { UserInMemoryRepository } from '../infra/db/user-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('UserRouteUseCase Tests', () => {
  it('should create a new user', async () => {
    const repository = new UserInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute({
      id: '0',
      age: 12,
      categories: ['carros', 'anime'],
      email: 'email@gmail.com',
      name: 'test',
      password: 'kjaskdjfkalsdfje234'
    });
    expect(output).toEqual({
      id: '0',
      age: 12,
      categories: ['carros', 'anime'],
      email: 'email@gmail.com',
      name: 'test',
      password: 'kjaskdjfkalsdfje234'
    });
    expect(repository.items).toHaveLength(1);
  });
});
