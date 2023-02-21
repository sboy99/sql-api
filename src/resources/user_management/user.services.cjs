const db = require("../../database/db.pool.cjs");

const getAllUsers = async (req, res) => {
  const users = (await db.query("SELECT * FROM users")).rows;
  res.json({
    users,
  });
};
const getSingleUser = async (req, res) => {
  res.json({
    message: "Single User",
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
