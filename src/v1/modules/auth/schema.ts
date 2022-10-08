import * as mongoose from 'mongoose';
import { schemaOptions } from "../../shares/schema.options";
import { IUser } from './interface';
const Schema = mongoose.Schema;

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    default: 'user'
  }
}, schemaOptions)
export const UserSchema = mongoose.model('Users', userSchema);