import * as mongoose from 'mongoose';
import { schemaOptions } from "../../shares/schema.options";
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  title: {
    type: String,
    default: ''
  }
}, schemaOptions)

export const SectionSchema = mongoose.model('Sections', sectionSchema);