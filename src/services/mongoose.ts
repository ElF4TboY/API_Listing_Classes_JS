import { connect } from "mongoose";

const uri: string =
;

export const connectDB = async () => {
  await connect(uri);
  console.log("DB connecting");
};
