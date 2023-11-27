const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../model/user.model");

// POST /api/auth/register
const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const isExists = await User.findOne({ email });
    if (isExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /api/auth/login
const login = async 

module.exports = { register };
