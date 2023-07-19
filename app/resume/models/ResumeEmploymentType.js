const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db') //Импортируйте настройки подключения к базе данных
const Resume = require('./Resume')
const EmploymentType = require('../../employment-type/EmploymentType')

const ResumeEmploymentTypes = sequelize.define('ResumeEmploymentTypes', {
  // Additional attributes (if any) related to the relationship
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
},{
    timestamps: false, // Отключение автоматических полей createdAt и updatedAt
});


// // не верно
// ResumeEmploymentTypes.belongsTo(Resume, { foreignKey: 'resumeId' }); // Определяем внешний ключ 'roleId'
// ResumeEmploymentTypes.belongsTo(EmploymentType, { foreignKey: 'employmentTypeId' }); // Определяем внешний ключ 'roleId'


// Define the association
Resume.belongsToMany(EmploymentType, { through: ResumeEmploymentTypes, foreignKey: 'resumeId', otherKey: 'employmentTypeId', as: "employmentTypes"});
EmploymentType.belongsToMany(Resume, { through: ResumeEmploymentTypes, foreignKey: 'resumeId', otherKey: 'employmentTypeId'  });

// // не верно
// Resume.hasMany(ResumeEmploymentTypes, { 
//   foreignKey: 'resumeId',
// });
//
// EmploymentType.hasMany(ResumeEmploymentTypes, { 
//   foreignKey: 'employmentTypeId',
// });

module.exports = ResumeEmploymentTypes;