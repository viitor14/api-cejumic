import Sequelize, { Model } from 'sequelize';

export default class Doacao extends Model {
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
          allowNull: true, // deixa o campo opcional
          unique: {
            msg: 'Este e-mail já está cadastrado.',
          },
          validate: {
            isEmail: {
              msg: 'Formato de e-mail inválido.',
            },
          },
        },

        telefone: {
          type: Sequelize.STRING,
          allowNull: true,
          validate: {
            len: {
              args: [10, 20],
              msg: 'Telefone deve ter entre 10 e 20 caracteres',
            },
          },
        },

        data_doacao: {
          type: Sequelize.DATEONLY,
          defaultValue: '',
        },

        tipo_doacao: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },

        valor: {
          type: Sequelize.DECIMAL(10, 2),
          defaultValue: 0.0,
          allowNull: true,
          validate: {
            min: {
              args: [0],
              msg: 'O valor deve ser positivo.',
            },
          },
        },

        quantidade: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: true,
        },

        descricao: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'doacoes',
      },
    );
  }
}
