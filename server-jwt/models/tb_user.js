"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_user.hasOne(models.tb_pasar, {
        foreignKey: "id_pasar",
        onDelete: "CASCADE",
      });
    }
  }
  tb_user.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      nip: DataTypes.STRING,
      nama: DataTypes.STRING,
      level: DataTypes.STRING,
      id_pasar: DataTypes.INTEGER,
      last_login: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "tb_user",
      timestamps: false,
    }
  );
  return tb_user;
};
