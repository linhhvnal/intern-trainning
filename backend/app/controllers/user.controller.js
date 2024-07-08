

exports.listUser = (req, res) => {
  res.json({
    message: "List User",
    data: []
  });
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