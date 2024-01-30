import { User } from "./models";
import { connectDB } from "../lib/utils";

export const fetchUsers = async () => {
  try {
    connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
