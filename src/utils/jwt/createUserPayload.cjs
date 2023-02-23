const createUserPayload = (user) => {
  return {
    userId: user.id,
    username: user.username,
  };
};

module.exports = createUserPayload;
