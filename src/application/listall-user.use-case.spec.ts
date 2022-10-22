import { UserInMemoryRepository } from '../infra/db/user-in-memory.repository';
import { ListAllUserUseCase } from './listall-user.use-case';

describe('listall UserCase Test', () => {
  it('should list all users', async () => {
    const repo = new UserInMemoryRepository();
    const listAllUserUseCase = new ListAllUserUseCase(repo);
    const result = await listAllUserUseCase.execute();
    expect(result).toHaveLength(0);
  });
});
