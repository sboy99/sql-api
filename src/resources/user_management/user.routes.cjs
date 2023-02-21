const router = require("express").Router();
const userServices = require("./user.services.cjs");
const userValidation = require("./user.validation.cjs");
const { validateBody } = require("../../middlewares/validation.middleware.cjs");

router.route("/").get(userServices.getAllUsers);
router
  .route("/:id")
  .get(userServices.getSingleUser)
  .patch(userServices.updateUser)
  .delete(userServices.deleteUser);

module.exports = router;
