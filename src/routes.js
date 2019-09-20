import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Samuel Ribeiro',
    email: 'samuel@gmail.com',
    password_hash: 'masterkey',
  });

  return res.json(user);
});

export default routes;
