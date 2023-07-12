const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db') //Импортируйте настройки подключения к базе данных
const Resume = require('./Resume')

const ForeignLanguage = sequelize.define('ForeignLanguage', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },       
},{
  timestamps: false, // Отключение автоматических полей createdAt и updatedAt
});

ForeignLanguage.belongsTo(Resume, { foreignKey: 'resumeId' }); // Определяем внешний ключ 'roleId'

module.exports = ForeignLanguage;
