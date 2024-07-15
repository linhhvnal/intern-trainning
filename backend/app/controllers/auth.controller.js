const db = require("../models");
const config = require("../config/app.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    let user = await User.create({
      username: req.body.username,
      email: req.body.email,
      address: req.body.address,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    if (req.body.roles) {
      let roles = await Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles,
          }
        }
      });
      {
        user.setRoles(roles)
        res.status(201).send({ message: "User registered successfully!" });
      
      };
    }
    else {
      // user role = 1
      user.setRoles([1])
      await res.status(201).send({ message: "User registered successfully!" });
      ;
    }

  }
  catch (err) {
    res.status(500).send({ message: err.message });
  };
};

exports.signin = async (req, res) => {
  try {
    let user = await User.findOne({
      where: {
        username: req.body.username,
      }
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: user.id }, config.SECRET_KEY, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: config.TIME, // 24 hours
    });

    var authorities = [];
    let roles = await user.getRoles();
    for (let i = 0; i < roles.length; i++) {
      authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token,
    });
  }

  catch (err) {
    res.status(500).send({ message: err.message });
  };
};