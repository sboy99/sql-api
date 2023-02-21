require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const validateEnv = require("./utils/validate.env.cjs");
// security packages

// middleware packages
const cors = require("cors");
const notFoundHandler = require("../src/middlewares/notFound.middleware.cjs");
const errorHandler = require("../src/middlewares/errorHandle.middleware.cjs");
const cookieParser = require("cookie-parser");
// import routes
const authRouter = require("./resources/auth/auth.routes.cjs");
const userRouter = require("./resources/user_management/user.routes.cjs");

validateEnv();
// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.get("/", (req, res) => {
  res.send("Welcome to Pern Application");
});

// initialize routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port:${port}`));
