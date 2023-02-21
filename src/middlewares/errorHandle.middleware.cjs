const getStructuredZodError = require("../utils/zod.error.cjs");

const errorHandler = (err, req, res, next) => {
  const status = Number(err?.status ?? 500);
  const message = String(err?.message) ?? `Something went wrong`;

  // console.log(err);
  if (err instanceof ZodError) {
    const structuredError = getStructuredZodError(err);
    return res.status(400).json(structuredError);
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
