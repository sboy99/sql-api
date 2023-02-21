const HttpException = require("../http.exception.cjs");

class Unauthorized extends HttpException {
  constructor(message) {
    super(403, message);
  }
}

module.exports = Unauthorized;
