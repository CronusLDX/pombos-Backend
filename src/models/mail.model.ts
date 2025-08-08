import { Schema, model, Document } from 'mongoose';
const { v4: uuidv4 } = require('uuid');

export interface MailDocument extends Document {
  title: string;
  address: string;
  destination: string;
  remitter: string;
  pidgey: string;
  status: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const MailSchema = new Schema<MailDocument>(
  {
    _id: { type: String, default: () => uuidv4() },
    title: { type: String, required: true },
    address: { type: String, required: true },
    destination: { type: String, required: true },
    remitter: { type: String, required: true },
    pidgey: { type: String, required: true },
    status: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const mailModel = model<MailDocument>('Mail', MailSchema);
module.exports = mailModel;
