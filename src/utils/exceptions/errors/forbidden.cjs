const HttpException = require("../http.exception.cjs");

class Forbidden extends HttpException {
  constructor(message) {
    super(403, message);
  }
}

module.exports = Forbidden;
