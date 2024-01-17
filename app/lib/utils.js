import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnection) return;
    // const db = await mongoose.connect("mongodb://127.0.0.1:27017/admin-dashboard-nextjs");
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnection = db.connections[0].readyState;
  } catch (e) {
    throw new Error(e);
  }
};
