import nextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

import { authconfig } from "./authconfig";
import { connectDB } from "./lib/utils";
import { User } from "./lib/models";

const login = async (credentials) => {
  try {
    connectDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentinals!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Password not correct");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = nextAuth({
  ...authconfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
