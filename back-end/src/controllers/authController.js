import bcrypt from "bcryptjs";
import { prisma } from "../../prisma/prisma";
var jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        user_email,
      },
    });

    if (user) {
      return res.status(401).json({ message: "Email already in use." });
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
    res
      .status(201)
      .json({ message: "User created", user_id: createUser.user_id });
  } catch (e) {
    res.status(500).json({ message: "Server error." });
  }
};

export const login = async (req, res) => {
  const { identifier, user_password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ user_name: identifier }, { user_email: identifier }],
      },
    });

    if (!user) {
      return res.error(401).json({ message: "Invalid credentials." });
    }

    const isValid = await bcrypt.compare(user_password, user.user_password);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user.user_id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};
