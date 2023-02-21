const router = require("express").Router();
const authServices = require("./auth.services.cjs");
const authValidation = require("./auth.validation.cjs");
const { validateBody } = require("../../middlewares/validation.middleware.cjs");

router
  .route("/register")
  .post(validateBody(authValidation.register), authServices.register);
router
  .route("/login")
  .post(validateBody(authValidation.login), authServices.login);
// todo: add authentication when implemented
router.route("/logout").get(authServices.logout);

module.exports = router;
