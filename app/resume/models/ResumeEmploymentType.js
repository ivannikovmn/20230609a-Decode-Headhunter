const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db') //Импортируйте настройки подключения к базе данных
const Resume = require('./Resume')
const EmploymentType = require('../employment-type/EmploymentType')

const ResumeEmploymentType = sequelize.define('ResumeEmploymentType', {
  // Additional attributes (if any) related to the relationship
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
},{
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
});

// Define the association
Resume.belongsToMany(EmploymentType, { through: ResumeEmploymentType });
EmploymentType.belongsToMany(Resume, { through: ResumeEmploymentType });

module.exports = ResumeEmploymentType;