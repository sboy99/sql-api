const router = require("express").Router();
const userServices = require("./user.services.cjs");
const userValidation = require("./user.validation.cjs");
const {
  validateBody,
  validateParams,
} = require("../../middlewares/validation.middleware.cjs");
const authenticate = require("../../middlewares/authentication.middleware.cjs");

router.route("/").get(userServices.getAllUsers);
router
  .route("/:id")
  .get(validateParams(userValidation.userParams), userServices.getSingleUser)
  .patch(
    validateParams(userValidation.userParams),
    authenticate,
    validateBody(userValidation.updateUser),
    userServices.updateUser
  )
  .delete(userServices.deleteUser);

module.exports = router;
