'use strict';
const {sequelize,DataTypes} = require('./sequelize-loader');

const Schedule = sequelize.define(
  'schedules',
  {
    schduleId: {
      type:DataTypes.UUID,
      primaryKey: true,
      allowNull:false
    },
    scheduleName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    memo:{
      type:DataTypes.TEXT,
      allowNull: false
    },
    createdBy:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    updatedAt:{
      type:DataTypes.DATE,
      allowNull:false
    }
  },
  {
    freezeTableName:true,
    timestamps:false,
    indexes:[
      {
        fields:['cratedBy']
      }
    ]
  }
);

module.export = Schedule;