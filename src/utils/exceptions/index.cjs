const BadRequest = require("./errors/badRequest.cjs");
const Forbidden = require("./errors/forbidden.cjs");
const NotFound = require("./errors/notFound.cjs");
const Unauthorized = require("./errors/unauthorized.cjs");

const Errors = {
  BadRequest,
  Forbidden,
  NotFound,
  Unauthorized,
};

module.exports = Errors;
