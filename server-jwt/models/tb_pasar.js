'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_pasar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_pasar.init({
    id_pasar: DataTypes.INTEGER,
    nama_pasar: DataTypes.STRING,
    alamat_pasar: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    koor_lat: DataTypes.STRING,
    koor_long: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_pasar',
  });
  return tb_pasar;
};