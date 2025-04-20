import Sequelize, { Model } from 'sequelize';

export default class Voluntario extends Model {
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

        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'email ja existe',
          },
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },

        telefone: {
          type: Sequelize.STRING,
          validate: {
            len: {
              args: [10, 20],
              msg: 'Telefone deve ter entre 10 e 20 caracteres',
            },
          },
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

        habilidades: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        disponibilidade: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
        tableName: 'voluntarios',
      },
    );
  }
}
