const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db') //Импортируйте настройки подключения к базе данных
const Resume = require('./Resume')

const WorkingHistory = sequelize.define('WorkingHistory', {
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  company_description: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  responsibilities: {
    type: DataTypes.STRING,
    allowNull: false,
  },    
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }, 
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },      
},{
  timestamps: false, // Отключение автоматических полей createdAt и updatedAt
});

WorkingHistory.belongsTo(Resume, { foreignKey: 'resumeId' }); // Определяем внешний ключ 'roleId'

Resume.hasMany(WorkingHistory, { foreignKey: 'resumeId', as: 'resumeWorkingHistories' });

module.exports = WorkingHistory;
