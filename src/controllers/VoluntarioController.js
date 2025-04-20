import Voluntario from '../models/Voluntario';

class VoluntarioController {
  async store(req, res) {
    try {
      const voluntario = await Voluntario.create(req.body);
      return res.json(voluntario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const voluntarios = await Voluntario.findAll({
        attributes: ['nome', 'habilidades', 'disponibilidade', 'created_at'],
      });
      return res.json(voluntarios);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new VoluntarioController();
