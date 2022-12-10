const express = require("express");
const router = express.Router();
const imageController = require("../controllers/image");

router.route("/").post(imageController.generateImage);

module.exports = router;
