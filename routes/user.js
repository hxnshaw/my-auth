const express = require("express");
const router = express.Router();
const { registerUser, loginUsers, homePage } = require("../controllers/user");

router.route("/register").post(registerUser);

router.route("/login").post(loginUsers);

router.route("/").get(homePage);

module.exports = router;
