const User = require("./user.model.cjs");
const Errors = require("../../utils/exceptions/index.cjs");

const getAllUsers = async (req, res) => {
  const users = await User.find({ username: "Sagar Bera" });
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
  res.json({
    message: "Update User",
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
