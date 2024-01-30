import moongose from "mongoose";

const userSchema = new moongose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    phone: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const productSchema = new moongose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    img: { type: String },
    color: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

export const User = moongose.models.User || moongose.model("User", userSchema);
export const Product =
  moongose.models.Product || moongose.model("Product", userSchema);
