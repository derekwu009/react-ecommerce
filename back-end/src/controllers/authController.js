import bcrypt from "bcryptjs";
import { prisma } from "../../prisma/prisma";
var jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        user_email,
      },
    });

    if (user) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);

    const createUser = await prisma.user.create({
      data: {
        user_name,
        user_email,
        user_password: hashedPassword,
      },
    });
    res.status(200).json({ message: "User created", user_id: user.user_id });
  } catch (e) {
    res.status(500).json({ message: "Server error." });
  }

  const login = async (req, res) => {};
};
