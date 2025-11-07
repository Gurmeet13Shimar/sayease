import mongoose from "mongoose";

export async function connectMongo() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is required in .env");
  }
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DB || undefined,
  });
}



