/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('beneficiarios', 'status', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.sequelize.query(`
      UPDATE beneficiarios SET status = 'Ativo';
    `);

    await queryInterface.changeColumn('beneficiarios', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('beneficiarios', 'status');
  },
};
