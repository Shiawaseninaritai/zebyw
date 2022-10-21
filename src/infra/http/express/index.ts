import express, { Express, Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/create-route.use-case';
import { UserInMemoryRepository } from '../../db/user-in-memory.repository';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const userRepo = new UserInMemoryRepository();

app.post('/user', async (req: Request, res: Response) => {
  const createUseCase = new CreateUserUseCase(userRepo);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

app.listen(port, () => {
  console.log('Server rodando na porta: ' + port);
});
