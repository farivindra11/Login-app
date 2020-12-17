const express = require("express");
const models = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const User = await models.tb_user.findAll({});
    console.log(User);
    res.status(200).send({
      status: 200,
      message: "berhasil get data tb_users",
      data: User,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllUsers };
