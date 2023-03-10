const jwt = require("jsonwebtoken");

const verifyJwtToken = (token) => {
  const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);

  return {
    userId: jwtPayload.userId,
    username: jwtPayload.username,
  };
};

module.exports = verifyJwtToken;
