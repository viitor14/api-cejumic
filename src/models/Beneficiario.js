import Sequelize, { Model } from 'sequelize';

export default class beneficiario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caractere',
            },
          },
        },

        cpf: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            is: {
              args: /^\d{11}$/,
              msg: 'CPF deve conter exatamente 11 dígitos numéricos',
            },
          },
        },

        dataNascimento: {
          type: Sequelize.DATEONLY,
          defaultValue: '',
        },

        endereco: {
          type: Sequelize.STRING,
          defaultValue: '',
        },

        bairro: {
          type: Sequelize.STRING,
          defaultValue: '',
        },

        cep: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            is: {
              args: /^\d{8}$/,
              msg: 'CEP deve conter exatamente 8 dígitos numéricos',
            },
          },
        },

        cidade: {
          type: Sequelize.STRING,
          defaultValue: '',
        },

        estado: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        observacoes: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: 'Ativo',
          validate: {
            isIn: {
              args: [['Ativo', 'Inativo']],
              msg: 'Status deve ser Ativo ou Inativo',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'beneficiarios',
      },
    );
  }
}
