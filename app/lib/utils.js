import mongoose from "mongoose";

export const connectDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
