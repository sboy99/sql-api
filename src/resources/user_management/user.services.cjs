const User = require("./user.model.cjs");
const Errors = require("../../utils/exceptions/index.cjs");

const getAllUsers = async (req, res) => {
  const { data: users } = (await User.find({ isDeleted: false })).select();
  res.json({
    users,
  });
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  const { data: user } = (await User.findOne({ id })).select(
    "-password -isDeleted"
  );
  if (!user) throw new Errors.NotFound("user not found");
  res.json({
    user,
  });
};

const updateUser = async (req, res) => {
  const { password, ...payload } = req.body;
  const { id } = req.params;
  if (req.user.userId === id) {
    const { data: user } = await User.findOneAndUpdate({ id }, payload);
    return res.json({
      user,
    });
  }
  throw new Errors.Forbidden(`You don't have permission to do this action`);
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
