"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tb_pasars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      id_pasar: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      nama_pasar: {
        type: Sequelize.STRING,
      },
      alamat_pasar: {
        type: Sequelize.STRING,
      },
      kecamatan: {
        type: Sequelize.STRING,
      },
      koor_lat: {
        type: Sequelize.STRING,
      },
      koor_long: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tb_pasars");
  },
};
