import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      // const { id, nome, email } = novoUser;
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : [e.message || 'Erro desconhecido'],
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const id = req.userId;
      const user = await User.findByPk(id);
      const { nome } = user;
      return res.json({ nome });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe.'],
        });
      }
      await user.destroy();

      return res.json('Usuário apagado');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
