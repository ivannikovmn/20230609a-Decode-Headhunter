'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vacancies', {
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
      salary_from: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      salary_to: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salary_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      skills: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      about_company: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or 'CASCADE' depending on your use case
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // or 'CASCADE' depending on your use case
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // or 'CASCADE' depending on your use case
      },
      specializationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Specializations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or 'CASCADE' depending on your use case
      },
      experienceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Experiences',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or 'CASCADE' depending on your use case
      },
      employmentTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EmploymentTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or 'CASCADE' depending on your use case
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vacancies');
  }
};
