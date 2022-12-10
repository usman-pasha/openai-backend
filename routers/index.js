const imageRouter = require("./image");

const route = (app) => {
  app.use("/image", imageRouter);
};

module.exports = route;
