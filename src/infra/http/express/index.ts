import express, { Express, Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/create-user.use-case';
import { ListAllUserUseCase } from '../../../application/listall-user.use-case';
import { UserInMemoryRepository } from '../../db/user-in-memory.repository';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const userRepo = new UserInMemoryRepository();

app.get('/users', async (req: Request, res: Response) => {
  const ListAllUseCase = new ListAllUserUseCase(userRepo);
  const output = ListAllUseCase.execute();
  res.json(output);
});

app.post('/user', async (req: Request, res: Response) => {
  const createUseCase = new CreateUserUseCase(userRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log('Server rodando na porta: ' + port);
});
