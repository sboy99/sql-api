const User = require("./user.model.cjs");
const Errors = require("../../utils/exceptions/index.cjs");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json({
    users,
  });
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ id });
  if (!user) throw new Errors.NotFound("user not found");
  res.json({
    user,
  });
};

const updateUser = async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;
  const user = await User.findOneAndUpdate({ id }, { username });
  res.json({
    user,
  });
};
const deleteUser = async (req, res) => {
  res.json({
    message: "Delete User",
  });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
