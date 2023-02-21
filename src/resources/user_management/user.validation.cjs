const { z } = require("zod");
const PW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;

const updateUser = z.object({
  username: z
    .string()
    .min(2, "minimum username length should be 2")
    .max(50, "maximum username length should be 2")
    .transform((str) => str.toLowerCase())
    .optional(),
});

const userParams = z.object({
  id: z.string({
    required_error: "id is required",
  }),
});

module.exports = {
  updateUser,
  userParams,
};
