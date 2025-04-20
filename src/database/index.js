import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Beneficiario from '../models/Beneficiario';
import Doacao from '../models/Doacao';
import Voluntario from '../models/Voluntario';

const models = [User, Beneficiario, Doacao, Voluntario];

const connection = new Sequelize(databaseConfig.url, {
  dialect: databaseConfig.dialect,
  dialectOptions: databaseConfig.dialectOptions,
  define: databaseConfig.define,
});

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
