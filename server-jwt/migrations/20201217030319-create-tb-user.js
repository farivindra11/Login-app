"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tb_user", {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      nip: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      level: {
        type: Sequelize.STRING,
      },
      pasar_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "tb_pasar",
          key: "id_pasar",
          as: "pasar_id",
        },
      },
      last_login: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tb_user");
  },
};
