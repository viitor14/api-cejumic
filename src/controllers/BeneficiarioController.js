import Beneficiario from '../models/Beneficiario';

class BeneficiarioController {
  async store(req, res) {
    try {
      const beneficiario = await Beneficiario.create(req.body);
      return res.json(beneficiario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async Active(req, res) {
    try {
      const beneficiarios = await Beneficiario.findAll({
        attributes: [
          'nome',
          'cpf',
          'dataNascimento',
          'endereco',
          'bairro',
          'cep',
          'cidade',
          'estado',
          'status',
          'created_at',
          'id',
        ],
        where: { status: 'ativo' },
      });
      return res.json(beneficiarios);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async All(req, res) {
    try {
      const beneficiarios = await Beneficiario.findAll({
        attributes: [
          'nome',
          'cpf',
          'dataNascimento',
          'endereco',
          'bairro',
          'cep',
          'cidade',
          'estado',
          'status',
          'created_at',
          'id',
        ],
      });
      return res.json(beneficiarios);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // const { userId } = req;

      const beneficiario = await Beneficiario.findByPk(id);

      if (!beneficiario) {
        return res.status(400).json({
          errors: ['Aluno não exite'],
        });
      }

      const beneficiarioAtualizado = await beneficiario.update(req.body);

      return res.json(beneficiarioAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new BeneficiarioController();
