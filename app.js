const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");
const port = 8080;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser(process.env.JWT_SECRET_KEY));

const userRouter = require("./routes/user");
const searchRouter = require("./routes/searchRouter");

app.use("/api/v1/anons", userRouter);
app.use("/api/v1/anons/search", searchRouter);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await sequelize.authenticate();
  console.log(`Database Connected`);
});
