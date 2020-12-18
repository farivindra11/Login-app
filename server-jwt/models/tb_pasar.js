"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_pasar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_pasar.belongsTo(models.tb_user, {
        foreignKey: "id_pasar",
      });
    }
  }
  tb_pasar.init(
    {
      id_pasar: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama_pasar: DataTypes.STRING,
      alamat_pasar: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      koor_lat: DataTypes.STRING,
      koor_long: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_pasar",
      timestamps: false,
    }
  );
  return tb_pasar;
};
