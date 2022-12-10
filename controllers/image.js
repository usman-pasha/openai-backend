const logger = require("../utils/log");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports.generateImage = async (req, res) => {
  logger.info("Openai image processing started");
  try {
    const reqData = req.body;
    const size =
      reqData.size === "small"
        ? "256x256"
        : reqData.size === "medium"
        ? "512x512"
        : "1024x1024";
    const imageData = await openai.createImage({
      prompt: reqData.imageName,
      n: 1,
      size: size,
    });
    const imageUrl = imageData.data.data[0].url;
    logger.data("image url", imageUrl);
    return res.status(200).send({
      message: "Successfull AI Image is Generated",
      success: true,
      data: imageUrl,
    });
  } catch (err) {
    if (err.imageData) {
      console.log(ere.imageData.status);
      console.log(err.imageData.data);
    } else {
      console.log(err.message);
    }
    return res.status(400).send({
      message: err.message,
      success: false,
    });
  }
};
