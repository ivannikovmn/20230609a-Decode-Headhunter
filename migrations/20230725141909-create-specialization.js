'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Specializations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specializationTypeId: { // Adding specializationTypeId column
        type: Sequelize.INTEGER,
        references: {
          model: 'SpecializationTypes', // Referencing the SpecializationType model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or 'CASCADE' depending on your use case
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Then drop the Specializations table
    await queryInterface.dropTable('Specializations');
  }
};
