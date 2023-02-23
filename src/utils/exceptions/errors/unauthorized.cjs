const HttpException = require("../http.exception.cjs");

class Unauthorized extends HttpException {
  constructor(message) {
    super(401, message);
  }
}

module.exports = Unauthorized;
