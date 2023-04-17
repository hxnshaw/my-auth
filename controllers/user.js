const { User } = require("../models");
const { createTokenUser, attachCookiesToResponse } = require("../utils");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const emailAlreadyExists = await User.findOne({
      where: { email: email },
    });

    if (emailAlreadyExists) {
      return res
        .status(400)
        .json({ message: "This Email is registered to a user" });
    }

    const firstAccountIsAdmin = (await User.count({})) === 0;
    const role = firstAccountIsAdmin ? "admin" : "user";

    const user = await User.create({
      username,
      email,
      password,
      role,
    });
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    return res.status(201).json({ user: `${tokenUser.username}!` });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("Please enter Email and Password");
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("User Does Not Exist");
    }
    const passwordIsCorrect = await user.comparePassword(password);
    console.log(passwordIsCorrect);

    if (!passwordIsCorrect) {
      throw new Error("Email or Password Incorrect");
    }
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    res.redirect(302, "/");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.homePage = async (req, res) => {
  try {
    return res.send("<h1>Hello! Welcome</h1>");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
