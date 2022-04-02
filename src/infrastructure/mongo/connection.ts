import mongoose from "mongoose";

export async function connectMongo() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(process.env.MONGO_URL);

  console.log("✅ Mongo has been successfully connected!");
}
