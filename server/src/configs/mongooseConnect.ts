import mongoose from "mongoose";
console.log(process.env.DATABASE_URL, "process.env.DATABASE_URL");
const mongooseConnect = mongoose.connect(process.env.DATABASE_URL || "");

export default mongooseConnect;
