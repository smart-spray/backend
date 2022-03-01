import mongoose from "mongoose";

export async function connectMongo() {
  await mongoose.connect(
    "mongodb+srv://fesa2022:0FYopRje81h63bxv@smart-spray.hum36.mongodb.net/smart-spray?retryWrites=true&w=majority"
  );

  console.log("Mongo has been successfully connected 🚀");
}
