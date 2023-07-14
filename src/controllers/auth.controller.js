const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// generating token using json-web-token
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

// register user with email and password
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    // Checking if user is already registered
    if (user) {
      return res.status(400).send({ message: "Email already registered!" });
    }
    // If new user create it or allow to register
    user = await User.create(req.body);
    const token = generateToken(user);
    return res.status(200).send({ token });
  } catch (err) {
    console.error("Error during user creation:", err);
    return res.status(400).send({ message: err.message });
  }
};

// logging in user if already registered
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // check if email exists
    if (!user) {
      return res.status(400).send({ message: "Invalid Credentials" });
    }

    // if email exists, check password
    const match = user.checkPassword(req.body.password);

    // if password does not match
    if (!match) return res.status(400).send({ message: "Invalid Credentials" });

    // if credentials match, generate token for user
    const token = generateToken(user);
    return res.status(200).send({ token });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login };
