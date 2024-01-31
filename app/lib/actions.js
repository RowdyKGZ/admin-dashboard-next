"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

import { User, Product } from "./models";
import { connectDB } from "./utils";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed create to user");
  }

  revalidatePath("/dashboard/users/");
  redirect("/dashboard/users/");
};

export const addProduct = async (formData) => {
  const { title, desc, price, color, stock, size } =
    Object.fromEntries(formData);

  try {
    connectDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      color,
      stock,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product");
  }

  revalidatePath("/dashboard/products/");
  redirect("/dashboard/products/");
};
