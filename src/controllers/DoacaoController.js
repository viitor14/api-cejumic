import Doacao from '../models/Doacao';

class DoacaoController {
  async store(req, res) {
    try {
      const doacao = await Doacao.create(req.body);
      return res.json(doacao);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const doacoes = await Doacao.findAll({
        attributes: ['nome', 'valor', 'tipo_doacao', 'quantidade', 'descricao', 'created_at'],
      });
      return res.json(doacoes);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new DoacaoController();
