import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
  email: String,
  password: String,
  username: String,
  cash: Number,
});
