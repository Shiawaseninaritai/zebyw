import { User, UserProps } from '../../domain/user.entity';
import { UserInMemoryRepository } from './user-in-memory.repository';

describe('UserInMemoryRepository Test', () => {
  it('should insert a new user', async () => {
    const repository = new UserInMemoryRepository();
    const email = 'email@gmail.com';
    const userProps: UserProps = {
      age: 12,
      categories: ['jogos', 'happy', 'animais'],
      email,
      name: 'test',
      password: '81237489123jasdhfajksf'
    };
    const user = new User(userProps);
    await repository.insert(user);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([user]);
  });
});
