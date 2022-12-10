const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routers/index");
const logger = require("./utils/log");

app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

routes(app);

app.listen(port, () => {
  logger.info(`App Running on port ${port}! \n${app.get("env")} Mode`);
});
