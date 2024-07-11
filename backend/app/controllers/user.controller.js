const { user, role } = require('../models/index');

exports.listUser = async (req, res) => { //userDetail
  try {
    const users = await user.findAll({
      include: [{
        model: role,
        attributes: ['userid', 'fullname', 'address']
      }],
      attributes: ['id', 'username', 'password']
    });
    res.json({
      message: "List of Users",
      data: users
    });
  } catch (error) {
    console.error('Error retrieving users:', error);
    // Handle errors appropriately (e.g., send error response to client)
    res.status(500).json({ message: "Error retrieving users" });
  }
};

exports.getUser = (req, res) => {
  res.json({
    message: "Get User",
    data: {
      id: req.params.id

    }
  });
};

exports.createUser = (req, res) => {
  res.json({
    message: "Create User",
    data: req.body
  });
}