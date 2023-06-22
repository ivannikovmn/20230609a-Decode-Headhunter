'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AuthCodes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valid_till: {
        type: Sequelize.DATE(6),
        allowNull: false,
      },
      // createdAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      // },
      // updatedAt: {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      // },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AuthCodes');
  },
};
