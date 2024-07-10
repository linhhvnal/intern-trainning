// const { User } = require("../models/user.model");
const { user } = require("../models/index");
var bcrypt = require("bcryptjs");

exports.listUser = async (req, res) => {
  try {
    const users = await user.findAll();
    res.json({
      message: "User List",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const temp = await user.findByPk(id);

    res.json({
      message: "User Detail",
      data: temp,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const temp = await user.findByPk(id);
    await temp.destroy();

    res.json({
      message: "User Deleted",
      data: temp,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { username, email, password, address } = req.body;
    const temp = await user.findByPk(id);
    temp.username = username;
    temp.email = email;
    temp.password =  bcrypt.hashSync(password, 8);
    temp.address = address;

    await temp.save();

    res.json({
      message: "User Updated",
      data: temp,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};
