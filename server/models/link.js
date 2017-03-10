'use strict';
module.exports = function(sequelize, DataTypes) {
  var Link = sequelize.define('Link', {
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Link.hasOne(models.User, { foreignKey: 'user_id'} )
      }
    }
  });
  return Link;
};
