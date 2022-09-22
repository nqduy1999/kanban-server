import * as mongoose from 'mongoose';
import { schemaOptions } from "../../shares/schema.options";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  position: {
    type: Number
  }
}, schemaOptions)

export const TaskSchema = mongoose.model('tasks', taskSchema);