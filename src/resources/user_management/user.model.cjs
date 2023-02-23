const createModel = require("../../database/query.cjs");

const User = new createModel("users");
module.exports = User;
