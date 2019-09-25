import User from '../models/User';

class UserController {
  async store(res, req) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User ja existe' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
