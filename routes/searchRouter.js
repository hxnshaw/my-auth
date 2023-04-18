const express = require("express");
const router = express.Router();
const searchForUsers = require("../controllers/searchController");
const { authenticateUser } = require("../middlewares/authentication");

router.route("/").get(authenticateUser, searchForUsers);

module.exports = router;
