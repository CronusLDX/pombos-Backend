import { Schema, model, Document } from 'mongoose';
const { v4: uuidv4 } = require('uuid');

export interface PidgeyDocument extends Document {
  _id: string;
  picture: string;
  nickname: string;
  averageSpeed: number;
  status: string;
  dateOfBirth: Date;
  letterDelivered: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PidgeySchema = new Schema<PidgeyDocument>(
  {
    _id: { type: String, default: () => uuidv4() },
    picture: { type: String, required: true },
    nickname: { type: String, required: true },
    averageSpeed: { type: Number, required: true },
    status: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    letterDelivered: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const pidgeyModel = model<PidgeyDocument>('Pidgey', PidgeySchema);
module.exports = pidgeyModel;
