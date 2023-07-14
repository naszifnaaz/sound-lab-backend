// Custom input validation using express validator
const { body, validationResult } = require("express-validator");
const validationBodyRules = [
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password should be atleast 6 characters").isLength({
    min: 6,
  }),
  body("fullname", "Enter Fullname").notEmpty(),
];

const checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
    });
  }
  next();
};

module.exports = { validationBodyRules, checkRules };
