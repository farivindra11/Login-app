"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tb_users", {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
      id_pasar: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "tb_pasars",
          key: "id_pasar",
        },
      },
      last_login: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tb_users");
  },
};
