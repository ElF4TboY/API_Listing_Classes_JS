import "dotenv/config";
import { connect } from "mongoose";

const uri = process.env.MONGO_URL;
export const connectDB = async () => {
  await connect(uri);
  console.log("DB connecting");
};
