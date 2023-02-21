const HttpException = require("../http.exception.cjs");

class Forbidden extends HttpException {
  constructor(message) {
    super(401, message);
  }
}

module.exports = Forbidden;
