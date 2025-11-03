import { User } from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { fullName, hash } = req.body;
    const user = await User.create({ fullName, hash });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
