const User = require("../user_management/user.model.cjs");
const Errors = require("../../utils/exceptions/index.cjs");
const encryptPassword = require("../../utils/security/encryptPassword.cjs");
const comparePassword = require("../../utils/security/comparePassword.cjs");
const createUserPayload = require("../../utils/jwt/createUserPayload.cjs");
const attachCookies = require("../../utils/jwt/attachCookies.cjs");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const isUserExistWithEmail = await User.findOne({ email });
  if (isUserExistWithEmail)
    throw new Errors.BadRequest("another user exist with this email");
  const encryptedPassword = await encryptPassword(password);
  const payload = {
    username,
    email,
    password: encryptedPassword,
  };
  const user = await User.create(payload);
  res.json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Errors.NotFound("user does not exist");
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Errors.BadRequest("invalid password");
  const userPayload = createUserPayload(user);
  attachCookies(res, userPayload);
  res.json({ message: "Login was successfull", user: userPayload });
};

const logout = async (req, res) => {
  res.json({ message: "logout" });
};

module.exports = {
  register,
  login,
  logout,
};
