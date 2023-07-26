const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db') //Импортируйте настройки подключения к базе данных
const City = require('../../region/City')
const User = require('../../auth/User')
const Specialization = require('../../specializations/models/Specialization');
const Company = require('../../auth/Company');
const Experience = require('./Experience');
const EmploymentType = require('../../employment-type/EmploymentType')

const Vacancy = sequelize.define('Resume', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  salary_from: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },     
  salary_to: {
    type: DataTypes.STRING,
    allowNull: false,
  },    
  salary_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },   
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },    
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },   
  about_company: {
    type: DataTypes.DATE,
    allowNull: false,
  }    
});

Vacancy.belongsTo(City, { foreignKey: 'cityId', as: "city" }); // Определяем внешний ключ 'roleId'
Vacancy.belongsTo(User, { foreignKey: 'userId' }); // Определяем внешний ключ 'roleId'
// Vacancy.belongsTo(Country, { foreignKey: 'companyId', as: 'company' }); // Определяем внешний ключ 'roleId'
Vacancy.belongsTo(Company, { foreignKey: 'companyId', as: 'company'  }); // Определяем внешний ключ 'roleId'
Vacancy.belongsTo(Specialization, { foreignKey: 'specializationId', as: 'specialization'  }); // Определяем внешний ключ 'roleId'
Vacancy.belongsTo(Experience, { foreignKey: 'experienceId', as: 'experience'  }); // Определяем внешний ключ 'roleId'
Vacancy.belongsTo(EmploymentType, { foreignKey: 'employmentTypeId', as: 'employmentType'  }); // Определяем внешний ключ 'roleId'

module.exports = Vacancy;
