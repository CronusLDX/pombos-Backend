import { Schema, model, Document } from 'mongoose';
const { v4: uuidv4 } = require('uuid');

export interface ClientDocument extends Document {
  _id: string;
  name: string;
  phone: string;
  dateOfBirth: Date;
  email: string;
  address: string;
  letterSend: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema = new Schema<ClientDocument>(
  {
    _id: { type: String, default: () => uuidv4() },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    letterSend: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const clientModel = model<ClientDocument>('Client', ClientSchema);
module.exports = clientModel;
