const { z } = require("zod");
const PW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;

const createUser = z.object({
  username: z
    .string({
      invalid_type_error: "username should be string",
      required_error: "user name is required",
    })
    .min(2, "minimum username length should be 2")
    .max(50, "maximum username length should be 2")
    .transform((str) => str.toLowerCase()),
  email: z
    .string({
      invalid_type_error: "email should be string",
      required_error: "email name is required",
    })
    .email("please provide a valid email"),
  password: z
    .string({
      invalid_type_error: "password should be string",
      required_error: "password is required",
    })
    .regex(
      PW_REGEX,
      "password should be alphanumeric and sould be atleast 6 letters long"
    ),
});

const updateUser = z.object({
  username: z
    .string()
    .min(2, "minimum username length should be 2")
    .max(50, "maximum username length should be 2")
    .transform((str) => str.toLowerCase())
    .optional(),
  password: z
    .string()
    .regex(
      PW_REGEX,
      "password should be alphanumeric and sould be atleast 6 letters long"
    )
    .optional(),
});

module.exports = {
  createUser,
  updateUser,
};
