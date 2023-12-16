import mongoose, { Document, Types } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  _id: Types.ObjectId;
}

const userSchema = new mongoose.Schema<IUser>({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default User;
