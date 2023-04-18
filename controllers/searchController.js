const { User } = require("../models");
const { createTokenUser } = require("../utils");

const searchForUsers = async (req, res, next) => {
  let search_key = req.query["username"];
  console.log(search_key);
  try {
    let user = await User.findOne({
      where: { username: search_key },
    });
    const tokenUser = createTokenUser(user);
    res.status(200).json({ tokenUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = searchForUsers;
