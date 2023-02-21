const HttpException = require("../http.exception.cjs");

class BadRequest extends HttpException {
  constructor(message) {
    super(400, message);
  }
}

module.exports = BadRequest;
